import {useState,type ChangeEvent} from "react";
import {recommendFileActions,summarizeIntake} from "../lib/fileIntake";
export default function UniversalIntakeDesk({onOpen}:{onOpen:(view:string,module?:string)=>void}){
 const [files,setFiles]=useState<File[]>([]);
 const summary=summarizeIntake(files);
 const actions=summary.overLimit?[]:recommendFileActions(files);
 function pick(e:ChangeEvent<HTMLInputElement>){setFiles([...(e.target.files??[])]);e.target.value="";}
 return <section className="panel">
  <p className="eyebrow">UNIVERSAL BOX · ONE ENTRY</p>
  <h2>Universal Intake / 万能文件入口</h2>
  <p className="subtle">选择文件后，自动显示已实现且适用于该类型的工具。仅查看文件名、大小和格式，不读取内容、不上传、不自动修改文件。点击功能按钮会跳转至对应工具，需在目标工具内重新选择文件。</p>
  <label className="field-label" htmlFor="universal-intake-files">Select files · 选择文件</label>
  <input id="universal-intake-files" className="field" type="file" multiple onChange={pick}/>
  {files.length>0&&<>
   <p className="subtle">{summary.count} files · {summary.bytes.toLocaleString()} bytes</p>
   {summary.overLimit?<p role="alert">超过预览限制：最多 50 个文件、100 MB。</p>:<>
    <div style={{maxHeight:200,overflowY:"auto"}}>
     {files.slice(0,50).map((f,i)=><p className="subtle" key={i}>{f.name} · {f.size.toLocaleString()} bytes</p>)}
    </div>
    <h3>Available actions · 可用操作</h3>
    <div className="actions">
     {actions.map(a=><button type="button" className="secondary-button" key={a.label} title={a.reason} onClick={()=>onOpen(a.view,a.module)}>{a.label}</button>)}
    </div>
    <p className="subtle">该入口只是本地功能导航，不代表自动识别文件内部格式。目标工具有独立的安全限制。</p>
   </>}
  </>}
 </section>;
}
