import {useMemo,useState} from "react";
import katex from "katex";
import {exportFile} from "../lib/output";
import {FORMULA_BOARD} from "../lib/formulaCatalog";

const STORAGE_KEY="daily-desk-formula-favorites-v1";
function savedFavorites():string[]{
 try{const value=JSON.parse(localStorage.getItem(STORAGE_KEY)??"[]") as unknown;
   return Array.isArray(value)?value.filter((x):x is string=>typeof x==="string").slice(0,100):[];
 }catch{return [];}
}
export default function FormulaDesk({onPreviewLatex}:{onPreviewLatex?:(latex:string)=>void}){
 const [group,setGroup]=useState("all");
 const [search,setSearch]=useState("");
 const [format,setFormat]=useState<"latex"|"plain">("latex");
 const [favs,setFavs]=useState<string[]>(savedFavorites);
 const [onlyFavs,setOnlyFavs]=useState(false);
 const [status,setStatus]=useState("");
 const items=useMemo(()=>FORMULA_BOARD.flatMap(section=>section.items.map(item=>({...item,section:section.title,sectionId:section.id}))),[]);
 const visible=useMemo(()=>items.filter(item=>{
   const term=search.trim().toLocaleLowerCase();
   return (group==="all"||group===item.sectionId)&&(!onlyFavs||favs.includes(item.id))&&
     (!term||(item.name+" "+item.plain+" "+item.latex+" "+item.section).toLocaleLowerCase().includes(term));
 }),[items,group,search,onlyFavs,favs]);
 function toggle(id:string){
   const next=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id].slice(0,100);
   setFavs(next);
   try{localStorage.setItem(STORAGE_KEY,JSON.stringify(next));}
   catch{setStatus("Favorites updated for this session; device persistence is unavailable.");}
 }
 async function copy(value:string){
   try{await navigator.clipboard.writeText(value);setStatus("Copied to clipboard.");}
   catch{setStatus("Clipboard unavailable. The formula remains visible for selection.");}
 }
 async function exportFavorites(){
   const result=items.filter(item=>favs.includes(item.id));
   const markdown=result.map(x=>"## "+x.name+"\n\n$"+x.latex+"$\n\n"+x.plain).join("\n\n")||"# No favorite formulas";
   try{setStatus(await exportFile("daily-desk-formula-favorites.md",markdown)?"Favorites exported locally.":"Save cancelled.");}
   catch(error){setStatus("Export failed: "+String(error));}
 }
 return <section className="panel">
   <h3>AP Formula Board · 完整公式板</h3>
   <p className="subtle">All {items.length} formulas from the web catalog. Search, choose a section, copy LaTeX/plain text, save favorites or send a formula to LaTeX preview.</p>
   <div className="tools-pair">
     <label className="field-label">Subject
       <select className="field" value={group} onChange={event=>setGroup(event.target.value)}>
         <option value="all">All subjects</option>
         {FORMULA_BOARD.map(section=><option key={section.id} value={section.id}>{section.title}</option>)}
       </select>
     </label>
     <label className="field-label">Search formulas
       <input className="field" value={search} onChange={event=>setSearch(event.target.value)} placeholder="power, gravity, Newton, statistics…"/>
     </label>
     <label className="field-label">Copy format
       <select className="field" value={format} onChange={event=>setFormat(event.target.value as "latex"|"plain")}>
         <option value="latex">LaTeX</option><option value="plain">Plain text</option>
       </select>
     </label>
   </div>
   <div className="actions">
     <label className="field-label"><input type="checkbox" checked={onlyFavs} onChange={event=>setOnlyFavs(event.target.checked)}/> Favorites only ({favs.length})</label>
     <button className="secondary-button" type="button" onClick={()=>{void exportFavorites();}}>Export favorites Markdown</button>
   </div>
   <p className="subtle">{visible.length} matching formulas · favorites are kept in local app storage when available.</p>
   <div className="tool-grid">
     {visible.map(item=><article key={item.id} className="tool-card">
       <strong>{item.name}</strong>
       <p className="subtle">{item.section}</p>
       <div className="math-formula" style={{overflowX:"auto"}} dangerouslySetInnerHTML={{__html:katex.renderToString(item.latex,{throwOnError:false,trust:false})}}/>
       <p className="subtle">{item.plain}</p>
       <div className="actions">
         <button type="button" className="secondary-button" onClick={()=>{void copy(format==="latex"?item.latex:item.plain);}}>Copy {format}</button>
         <button type="button" className="secondary-button" onClick={()=>toggle(item.id)}>{favs.includes(item.id)?"★ Favorite":"☆ Favorite"}</button>
         {onPreviewLatex&&<button type="button" className="secondary-button" onClick={()=>onPreviewLatex(item.latex)}>Open in LaTeX</button>}
       </div>
     </article>)}
   </div>
   {status&&<p role="status" className="subtle">{status}</p>}
 </section>;
}