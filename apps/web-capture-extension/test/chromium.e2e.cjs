"use strict";
/* Real headless Chromium with the shipped popup.js/html unchanged.
 * CI-only copy gets a localhost host grant and inert worker solely for
 * automated fixture access and Playwright extension-id discovery.
 * No production permissions or background behaviors are altered.
 */
const assert=require("node:assert/strict");
const {test}=require("node:test");
const fs=require("node:fs");
const os=require("node:os");
const path=require("node:path");
const http=require("node:http");
const {chromium}=require("playwright");
const base=path.resolve(__dirname,"..");
const shots=path.join(base,"browser-test-results");
fs.mkdirSync(shots,{recursive:true});

const basic='<main><h1>Local test article</h1><p>Visible extraction check</p></main>';
const fixture={
 single:'<!doctype html><html><head><title>Basic Example</title></head><body>'+basic+
  '<table><caption>Measurements</caption><tr><th>Material</th><th>Mass</th></tr><tr><td>Iron</td><td>56</td></tr><tr><td>=2+2</td><td>safe</td></tr></table></body></html>',
 multi:'<!doctype html><html><head><title>Multiple Tables</title></head><body>'+
  '<table><caption>Wrong table</caption><tr><th>Bad</th></tr><tr><td>A</td></tr></table>'+
  '<table><caption>Requested data</caption><tr><th>Item</th><th>Count</th></tr><tr><td>Alpha</td><td>9</td></tr></table>'+
  '<table hidden><tr><td>Invisible table</td></tr></table></body></html>',
 empty:'<!doctype html><html><head><title>Empty</title></head><body><h1>No tables</h1></body></html>',
 merged:'<!doctype html><html><body><table><tr><th colspan="2">Merged header</th></tr><tr><td>A</td><td>B</td></tr></table></body></html>',
 long:'<!doctype html><html><body><table>'+Array.from({length:65},()=>'<tr><td>'+('a'.repeat(7000))+'</td><td>end</td></tr>').join('')+'</table></body></html>',
};
async function startServer(){
 const app=http.createServer((req,res)=>{
  const key=(req.url||"/").replace(/^\//,"")||"single";
  if(!Object.hasOwn(fixture,key)){res.writeHead(404);res.end("Not found");return;}
  res.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"});
  res.end(fixture[key]);
 });
 await new Promise((resolve,reject)=>{app.once("error",reject);app.listen(0,"127.0.0.1",resolve);});
 return {app,url:"http://127.0.0.1:"+app.address().port};
}
function extensionCopy(dir){
 const ext=path.join(dir,"extension");
 fs.mkdirSync(ext,{recursive:true});
 for(const file of ["popup.html","popup.js"])fs.copyFileSync(path.join(base,file),path.join(ext,file));
 const manifest=JSON.parse(fs.readFileSync(path.join(base,"manifest.json"),"utf8"));
 manifest.host_permissions=["http://127.0.0.1/*"];
 manifest.background={service_worker:"ci-id-only.js"};
 fs.writeFileSync(path.join(ext,"manifest.json"),JSON.stringify(manifest));
 fs.writeFileSync(path.join(ext,"ci-id-only.js"),'"use strict"; // No event handlers, network requests, or page monitoring.\n');
 return ext;
}
async function shot(page,name){await page.screenshot({path:path.join(shots,name),fullPage:true});}
test("real Chromium loads and exercises Web Capture MV3 popup", {timeout:180000},async t=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),"ubox-playwright-"));
 const {app,url}=await startServer();
 const ext=extensionCopy(temp);
 let context;
 try{
  context=await chromium.launchPersistentContext(path.join(temp,"profile"),{
   channel:"chromium",headless:true,acceptDownloads:true,
   args:["--disable-extensions-except="+ext,"--load-extension="+ext,"--no-sandbox"],
  });
  let worker=context.serviceWorkers()[0];
  if(!worker)worker=await context.waitForEvent("serviceworker",{timeout:25000});
  const id=new URL(worker.url()).hostname;
  assert.match(id,/^[a-p]{32}$/);
  const popup=await context.newPage();
  const target=await context.newPage();
  const popupUrl="chrome-extension://"+id+"/popup.html";
  async function open(fixtureName){
   await target.goto(url+"/"+fixtureName,{waitUntil:"domcontentloaded"});
   await popup.goto(popupUrl,{waitUntil:"domcontentloaded"});
   await target.bringToFront();
   const active=await popup.evaluate(()=>chrome.tabs.query({active:true,currentWindow:true}));
   assert.equal(active[0].url,target.url(),"fixture must be current active browser tab");
  }
  await t.test("one-table direct save creates a real CSV download",async()=>{
   await open("single");
   const wait=popup.waitForEvent("download",{timeout:15000});
   await popup.getByRole("button",{name:"直接保存表格 CSV"}).click();
   const downloaded=await wait;
   const destination=path.join(shots,"single-test.csv");
   await downloaded.saveAs(destination);
   const contents=fs.readFileSync(destination,"utf8");
   assert.match(contents,/"Material","Mass"/);
   assert.match(contents,/"Iron","56"/);
   assert.match(contents,/"'=2\+2","safe"/);
   assert.match(downloaded.suggestedFilename(),/tables-.+\.csv$/);
   await shot(popup,"single-table.png");
  });
  await t.test("several tables require choice; export selected table only",async()=>{
   await open("multi");
   let events=0;const track=()=>events++;
   popup.on("download",track);
   await popup.getByRole("button",{name:"直接保存表格 CSV"}).click();
   await popup.locator("#tablePicker").waitFor({state:"visible"});
   assert.equal(await popup.locator("#tableSelect option").count(),2);
   assert.equal(events,0);
   await popup.locator("#tableSelect").selectOption("1");
   const wait=popup.waitForEvent("download",{timeout:15000});
   await popup.getByRole("button",{name:"直接保存表格 CSV"}).click();
   const downloaded=await wait;
   await downloaded.saveAs(path.join(shots,"selected-table.csv"));
   const contents=fs.readFileSync(path.join(shots,"selected-table.csv"),"utf8");
   assert.match(contents,/Alpha/);
   assert.doesNotMatch(contents,/Bad/);
   popup.off("download",track);
   await shot(popup,"selected-table.png");
  });
  await t.test("empty table page displays explicit error",async()=>{
   await open("empty");
   await popup.getByRole("button",{name:"查找所有表格"}).click();
   await popup.locator("#status").getByText("扫描失败",{exact:false}).waitFor();
   assert.equal(await popup.locator("#tablePicker").isVisible(),false);
   await shot(popup,"empty-table-warning.png");
  });
  await t.test("merged cells do not export incorrect CSV",async()=>{
   await open("merged");
   await popup.getByRole("button",{name:"复制所选表格 CSV"}).click();
   await popup.locator("#status").getByText("合并单元格",{exact:false}).waitFor();
   await popup.locator("#tableNotice").getByText("合并单元格",{exact:false}).waitFor();
   assert.equal(await popup.locator("#tableNotice").isVisible(),true);
   await shot(popup,"merged-cell-warning.png");
  });
  await t.test("large CSV fails instead of truncating quoted cells",async()=>{
   await open("long");
   await popup.getByRole("button",{name:"直接保存表格 CSV"}).click();
   await popup.locator("#status").getByText("超过 400,000",{exact:false}).waitFor();
   await popup.locator("#tableNotice").getByText("超过 400,000",{exact:false}).waitFor();
   await shot(popup,"oversized-csv-warning.png");
  });
  await t.test("Markdown reading updates preview and provenance",async()=>{
   await open("single");
   await popup.getByRole("button",{name:"复制 Markdown",exact:true}).click();
   const value=await popup.locator("#preview").inputValue();
   assert.match(value,/Local test article/);
   assert.match(value,/Visible extraction check/);
   assert.match(await popup.locator("#sourceMeta").textContent(),/127\.0\.0\.1/);
   await shot(popup,"markdown-preview.png");
  });
  console.log("PASS Chromium MV3 popup and real file downloads");
 }catch(error){
  if(context)for(const p of context.pages())if(p.url().startsWith("chrome-extension:")){
   try{await shot(p,"failure-popup.png");}catch{}
  }
  throw error;
 }finally{
  if(context)await context.close();
  await new Promise(resolve=>app.close(resolve));
  fs.rmSync(temp,{recursive:true,force:true});
 }
});
