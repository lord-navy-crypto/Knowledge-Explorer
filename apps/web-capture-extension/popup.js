"use strict";
/* No network requests, persistent storage, automatic capture, or external dependencies. */
const statusEl=document.getElementById("status");
const previewEl=document.getElementById("preview");
const buttons=[...document.querySelectorAll("button[data-mode]")];
function capturePage(mode){
  const LIMIT=400000;
  const clean=s=>(s||"").replace(/\u0000/g,"").trim();
  const blocked=new Set(["SCRIPT","STYLE","NOSCRIPT","TEMPLATE","SVG","CANVAS","NAV","FOOTER","HEADER"]);
  function allowed(el){
    if(el.closest("[hidden],[aria-hidden='true'],[inert]"))return false;
    const style=getComputedStyle(el);
    return style.display!=="none"&&style.visibility!=="hidden";
  }
  const root=document.querySelector("main article,article,main,[role='main']")||document.body;
  if(!root)throw Error("此页面没有可提取的正文。");
  if(mode==="text"){
    const clone=document.body.cloneNode(true);
    clone.querySelectorAll("script,style,noscript,template,svg,canvas").forEach(el=>el.remove());
    return clean(document.body.innerText||clone.textContent).slice(0,LIMIT);
  }
  if(mode==="links"){
    const rows=[["text","url"]],seen=new Set();
    for(const a of document.querySelectorAll("a[href]")){
      if(!allowed(a))continue;
      const url=a.href;
      if(!/^https?:\/\//i.test(url)||seen.has(url))continue;
      seen.add(url);rows.push([clean(a.innerText||a.textContent).slice(0,300),url]);
      if(rows.length>2001)break;
    }
    return rows.map(cols=>cols.map(s=>'"'+s.replace(/"/g,'""').replace(/^[=+@\-\t\r]/,"'")+"\u0022").join(",")).join("\r\n").slice(0,LIMIT);
  }
  const out=[],walk=(node,depth=0)=>{
    if(out.join("").length>=LIMIT||depth>36)return;
    if(node.nodeType===Node.TEXT_NODE){
      const value=clean(node.nodeValue).replace(/\s+/g," ");
      if(value)out.push(value+" ");
      return;
    }
    if(node.nodeType!==Node.ELEMENT_NODE)return;
    const el=node,tag=el.tagName;
    if(blocked.has(tag)||!allowed(el))return;
    if(tag==="BR"){out.push("\n");return;}
    if(tag==="IMG")return;
    if(/^H[1-6]$/.test(tag)){
      out.push("\n\n"+"#".repeat(Number(tag[1]))+" "+clean(el.innerText).replace(/\s+/g," ")+"\n\n");return;
    }
    if(tag==="A"){
      const label=clean(el.innerText).replace(/\s+/g," ").replace(/[\[\]]/g,"");
      const href=el.href;
      if(label)out.push(/^https?:\/\//i.test(href)?"["+label+"]("+href.replace(/[()]/g,encodeURIComponent)+")":label);
      return;
    }
    if(tag==="LI"){out.push("\n- ");}
    if(["P","DIV","SECTION","ARTICLE","UL","OL","BLOCKQUOTE","TR"].includes(tag))out.push("\n");
    for(const child of el.childNodes)walk(child,depth+1);
    if(["P","DIV","SECTION","ARTICLE","UL","OL","BLOCKQUOTE","TR"].includes(tag))out.push("\n");
  };
  walk(root);
  return out.join("").replace(/[ \t]+\n/g,"\n").replace(/\n{3,}/g,"\n\n").trim().slice(0,LIMIT);
}
async function perform(mode){
  buttons.forEach(b=>b.disabled=true);statusEl.textContent="正在提取…";previewEl.value="";
  try{
    const [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    if(!tab?.id)throw Error("未找到当前标签页。");
    const results=await chrome.scripting.executeScript({target:{tabId:tab.id},func:capturePage,args:[mode]});
    const text=results?.[0]?.result||"";
    if(!text)throw Error("没有找到可复制的内容。");
    previewEl.value=text;
    try{
      await navigator.clipboard.writeText(text);
      statusEl.textContent="已复制到剪贴板 · "+text.length+" 字符（最多 400,000）";
    }catch{
      statusEl.textContent="浏览器拒绝了剪贴板写入。可在下方文本框手动复制。";
      previewEl.focus();previewEl.select();
    }
  }catch(error){statusEl.textContent="提取失败："+(error?.message||String(error))+"。请在普通 http(s) 网页尝试。";}
  finally{buttons.forEach(b=>b.disabled=false);}
}
buttons.forEach(button=>button.addEventListener("click",()=>void perform(button.dataset.mode)));
