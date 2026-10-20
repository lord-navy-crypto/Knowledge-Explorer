export type IntakeAction={label:string;view:string;module?:string;reason:string};
const ext=(name:string)=>name.toLowerCase().split(".").pop()||"";
export function recommendFileActions(files:readonly {name:string;size:number;type?:string}[]):IntakeAction[]{
 if(!files.length)return [];
 const kinds=new Set(files.map(f=>ext(f.name)));
 const actions:IntakeAction[]=[];
 const add=(label:string,view:string,module:string|undefined,reason:string)=>{
  if(!actions.some(x=>x.label===label))actions.push({label,view,module,reason});
 };
 const all=(a:string[])=>[...kinds].every(k=>a.includes(k));
 if(all(["csv","tsv"])){
  add("CSV 表格查看 / 合并","tables",undefined,"按列名合并表格、筛选和导出");
  add("表格与 Excel 互转","free-formats","spreadsheet","CSV 与电子表格格式转换");
 }
 if(kinds.has("pdf")){
  add("PDF 合并、拆分、页面整理","files","pdf","使用现有 PDF 文件工具");
  add("PDF 属性和填写","pdf-mini","metadata","使用现有 PDF 编辑器");
 }
 if(all(["png","jpg","jpeg","webp","gif","bmp"])){
  add("图片处理与格式转换","files","images","批量调整图片尺寸和格式");
  add("图片批量处理工作流","workflows","image-batch","压缩前处理并生成新图片包");
 }
 if(all(["zip"])){
  add("ZIP 安全检查","media-files","zip-inspect","读取压缩包元数据");
  add("ZIP 选择性解压","workflows","zip-selective","仅提取选中的安全文件");
 }
 if(all(["txt","md","html","json","csv","tsv"])){
  add("文字整理、查找替换","quick-tools","replace","清理或替换文本文档内容");
 }
 if(files.length>1){
  add("批量打包 ZIP","workflows","zip-pack","选择文件生成新的 ZIP 压缩包");
  add("文件名清单与批量重命名","utilities","rename","导出文件清单或创建重命名副本");
 }
 add("SHA-256 文件校验","universal","checksum","检查文件摘要与完整性");
 return actions;
}
export function summarizeIntake(files:readonly {name:string;size:number}[]){
 const total=files.reduce((n,f)=>n+f.size,0);
 return {count:files.length,bytes:total,overLimit:files.length>50||total>100_000_000};
}
