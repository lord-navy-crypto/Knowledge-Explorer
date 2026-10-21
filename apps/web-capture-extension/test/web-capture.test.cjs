"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const {test}=require("node:test");
const path=require("node:path");
const script=fs.readFileSync(path.join(__dirname,"..","popup.js"),"utf8");

function makeCell(value,span=1,tagName="TD"){
  return {tagName,colSpan:span,rowSpan:1,innerText:value,textContent:value};
}
function makeRow(values,{hidden=false}={}){
  const children=values.map(value=>typeof value==="object"&&value.tagName?value:makeCell(value));
  return {children,innerText:children.map(c=>c.innerText).join(" "),closest:()=>hidden?{}:null};
}
function makeTable(rows,caption=""){
  return {
    closest:()=>null,
    querySelector(selector){
      if(selector==="tr")return rows[0]||null;
      if(selector==="caption")return caption?{innerText:caption}:null;
      return null;
    },
    querySelectorAll(selector){return selector==="tr"?rows:[]},
  };
}
function inject(tables){
  const nodes=new Map();
  const downloaded=[];
  const element=id=>{
    if(!nodes.has(id))nodes.set(id,{
      id,value:"",hidden:true,dataset:{},disabled:false,
      textContent:"",children:[],listeners:{},addEventListener(event,callback){this.listeners[event]=callback;},
      appendChild(item){this.children.push(item)},
      replaceChildren(){this.children=[]},focus(){},select(){},
    });
    return nodes.get(id);
  };
  const ctx={
    document:{
      getElementById:element,
      querySelectorAll(selector){
        if(selector==="table")return tables;
        if(selector==="button[data-mode]")return [];
        return [];
      },
      querySelector:()=>null,
      createElement:tag=>tag==="a"?{click(){downloaded.push(this.download);},remove(){}}:{value:"",textContent:""},
      body:{appendChild(){}},
    },
    location:{protocol:"https:",href:"https://example.org/science?date=2026"},
    getComputedStyle:()=>({display:"block",visibility:"visible"}),
    navigator:{clipboard:{writeText:async()=>{}}},
    chrome:{tabs:{query:async()=>[{id:9,url:"https://example.org/science?date=2026"}]},scripting:{executeScript:async({func,args})=>[{result:func(...(args||[]))}]}},
    URL,Date,console,setTimeout:()=>0,downloaded,
    btoa:()=>"",Blob,
    Node:{TEXT_NODE:3,ELEMENT_NODE:1},
  };
  vm.createContext(ctx);
  vm.runInContext(script+"\n;globalThis.capture=capturePage;globalThis.inspect=inspectPageTables;globalThis.perform=perform;",ctx);
  return ctx;
}
test("lists visible page tables so users can choose the intended one",()=>{
  const ctx=inject([
    makeTable([makeRow(["Name","Value"])],"First data"),
    makeTable([makeRow(["Part","Mass"]),makeRow(["Iron","56"])],"Materials"),
  ]);
  const res=ctx.inspect();
  assert.equal(res.tables.length,2);
  assert.equal(res.tables[1].label,"Materials");
  assert.equal(res.tables[1].rows,2);
  assert.equal(res.tables[1].columns,2);
});
test("exports selected table, never silently exporting the first table",()=>{
  const ctx=inject([makeTable([makeRow(["Wrong"])]),makeTable([
    makeRow(["Name","Value"]),makeRow(["Volcano","42"]),
  ])]);
  assert.equal(ctx.capture("tables",1),'"Name","Value"\r\n"Volcano","42"');
  assert.throws(()=>ctx.capture("tables",2),/表格序号无效/);
});
test("neutralizes spreadsheet formulas and escapes delimiters and quotes",()=>{
  const ctx=inject([makeTable([makeRow([
    "=2+2","+4","-10","@unsafe",'a"b',"a,b",
  ])])]);
  const result=ctx.capture("tables",0);
  assert.ok(result.includes("\"'=2+2\""));
  assert.ok(result.includes("\"'+4\""));
  assert.ok(result.includes("\"'-10\""));
  assert.ok(result.includes("\"'@unsafe\""));
  assert.ok(result.includes('"a""b"'));
  assert.ok(result.includes('"a,b"'));
});
test("refuses merged cells rather than exporting misleading data",()=>{
  const ctx=inject([makeTable([makeRow([makeCell("Merged",2)])])]);
  assert.throws(()=>ctx.capture("tables",0),/合并单元格/);
});
test("oversized CSV fails instead of truncating half of a quoted cell",()=>{
  const rows=Array.from({length:26},()=>makeRow(Array(2).fill("A".repeat(10000))));
  const ctx=inject([makeTable(rows)]);
  assert.throws(()=>ctx.capture("tables",0),/超过 400,000/);
});
test("more than 5,000 table rows fail without silently losing data",()=>{
  const rows=Array.from({length:5001},()=>makeRow(["x"]));
  const ctx=inject([makeTable(rows)]);
  assert.throws(()=>ctx.capture("tables",0),/5,000 行/);
});
test("hidden page rows are excluded",()=>{
  const ctx=inject([makeTable([
    makeRow(["Header"]),makeRow(["hidden"],{hidden:true}),makeRow(["Visible"]),
  ])]);
  assert.equal(ctx.capture("tables",0),'"Header"\r\n"Visible"');
});
test("manual preview/table selection with no broader permissions",()=>{
  const root=path.join(__dirname,"..");
  const manifest=JSON.parse(fs.readFileSync(path.join(root,"manifest.json"),"utf8"));
  const html=fs.readFileSync(path.join(root,"popup.html"),"utf8");
  assert.equal(manifest.manifest_version,3);
  assert.deepEqual(manifest.permissions,["activeTab","scripting","clipboardWrite"]);
  for(const id of ["scanTables","tableSelect","tablePicker","sourceMeta","copyPreview","save"])
    assert.ok(html.includes('id="'+id+'"'),id);
  assert.ok(html.includes('data-mode="tables" data-save="true"'));
  assert.equal(Object.hasOwn(manifest,"host_permissions"),false);
});

test("one table can be captured and saved in a single explicit action",async()=>{
  const ctx=inject([makeTable([makeRow(["Source","Value"]),makeRow(["A","9"])],"Report")]);
  await ctx.perform("tables",true);
  assert.equal(ctx.downloaded.length,1);
  assert.match(ctx.downloaded[0],/^universal-box-example\.org-tables-\d{4}-/);
  assert.match(ctx.downloaded[0],/\.csv$/);
  assert.equal(ctx.document.getElementById("preview").value,'"Source","Value"\r\n"A","9"');
});
test("several tables require selection and keep old preview on failed extraction",async()=>{
  const ctx=inject([
    makeTable([makeRow(["Wrong","1"])]),
    makeTable([makeRow(["Correct","2"])],"Wanted"),
  ]);
  const original="Previous successful capture";
  ctx.document.getElementById("preview").value=original;
  await ctx.perform("tables",true);
  assert.equal(ctx.downloaded.length,0);
  assert.equal(ctx.document.getElementById("preview").value,original);
  assert.equal(ctx.document.getElementById("tablePicker").hidden,false);
  assert.equal(ctx.document.getElementById("tableSelect").children.length,2);
  ctx.document.getElementById("tableSelect").value="1";
  await ctx.perform("tables",true);
  assert.equal(ctx.downloaded.length,1);
  assert.equal(ctx.document.getElementById("preview").value,'"Correct","2"');
});
