import {useMemo,useState} from "react";
import {
  type CleanupOptions,DEFAULT_CLEANUP,cleanCopiedText,cleanUrlList,
  dateDifference,shiftDate,parseGradeRows,calculateWeightedGrade,
} from "../lib/quickKit";
import {exportFile} from "../lib/output";
import {replaceTextLiteral} from "../lib/quickBatchText";

export type QuickKitMode="text"|"links"|"dates"|"grades"|"replace";
const title:Record<QuickKitMode,string>={
  text:"Text cleaner · 文本整理",links:"Tracking-link cleaner · 链接净化",
  replace:"Literal replace · 批量查找替换",dates:"Date planner · 日期计算",grades:"Weighted grades · 成绩规划",
};
const number=(n:number)=>String(Number(n.toFixed(6)));
export default function QuickKitDesk({initialMode="text"}:{initialMode?:QuickKitMode}){
  const [mode,setMode]=useState<QuickKitMode>(initialMode);
  const [source,setSource]=useState("  Copy   from a PDF\nLine two\nLine two");
  const [options,setOptions]=useState<CleanupOptions>(DEFAULT_CLEANUP);
  const [urls,setUrls]=useState("https://example.com/article?id=123&utm_source=newsletter&fbclid=abc");
  const [dateA,setDateA]=useState("2026-10-19");
  const [dateB,setDateB]=useState("2026-11-01");
  const [includeEnd,setIncludeEnd]=useState(false);
  const [shift,setShift]=useState("7");
  const [gradeData,setGradeData]=useState("Homework,25,90\nTests,25,80\nFinal exam,50,?");
  const [target,setTarget]=useState("90");
  const [status,setStatus]=useState("");
  const [findLiteral,setFindLiteral]=useState("");
  const [replacement,setReplacement]=useState("");
  const textResult=useMemo(()=>{
    try{return {value:cleanCopiedText(source,options),error:""};}
    catch(e){return {value:"",error:String(e instanceof Error?e.message:e)};}
  },[source,options]);
  const linkResult=useMemo(()=>{
    try{return {...cleanUrlList(urls),error:""};}
    catch(e){return {text:"",count:0,removed:0,error:String(e instanceof Error?e.message:e)};}
  },[urls]);
  const dateResult=useMemo(()=>{
    try{
      if(!/^[-+]?\d+$/u.test(shift.trim()))throw new Error("Enter a whole-number day offset.");
      return {days:dateDifference(dateA,dateB,includeEnd),adjusted:shiftDate(dateA,Number(shift)),error:""};
    }catch(e){return {days:null,adjusted:"",error:String(e instanceof Error?e.message:e)};}
  },[dateA,dateB,includeEnd,shift]);
  const grades=useMemo(()=>{
    try{return {value:calculateWeightedGrade(parseGradeRows(gradeData),Number(target)),error:""};}
    catch(e){return {value:null,error:String(e instanceof Error?e.message:e)};}
  },[gradeData,target]);
  const replaceResult=useMemo(()=>{try{return {...replaceTextLiteral(source,findLiteral,replacement),error:""};}catch(e){return {text:"",count:0,error:String(e instanceof Error?e.message:e)};}},[source,findLiteral,replacement]);
  const output=mode==="text"?textResult.value:mode==="links"?linkResult.text:mode==="replace"?replaceResult.text:"";
  async function copyResult(){
    try{
      await navigator.clipboard.writeText(output);
      setStatus("Copied locally to clipboard.");
    }catch{setStatus("Clipboard permission unavailable. Select and copy the result manually.");}
  }
  async function saveResult(){
    try{
      const saved=await exportFile(mode==="links"?"clean-links.txt":mode==="replace"?"replaced-text.txt":"clean-text.txt",output);
      setStatus(saved?"Saved locally.":"Save cancelled.");
    }catch(e){setStatus(String(e instanceof Error?e.message:e));}
  }
  const toggle=(name:keyof CleanupOptions,checked:boolean)=>setOptions(o=>({...o,[name]:checked}));
  return <section className="panel">
    <p className="eyebrow">QUICKKIT · 轻量快捷工具 · OFFLINE</p>
    <h2>Quick Tools / 快捷小工具</h2>
    <p className="subtle">Four tiny tasks without accounts or online uploads. Local input stays in this window; text/links are exported only when you click. Date calculations use calendar days, not elapsed 24-hour periods.</p>
    <div className="pill-row" role="group" aria-label="Quick tool">
      {(["text","links","replace","dates","grades"] as const).map(key=><button type="button" key={key}
        className={mode===key?"pill active-pill":"pill"} onClick={()=>{setMode(key);setStatus("");}}>{title[key]}</button>)}
    </div>
    {mode==="text"&&<>
      <label htmlFor="quick-text-input" className="field-label">Messy copied text · 粘贴原文</label>
      <textarea id="quick-text-input" className="field text-editor" rows={6} maxLength={200000} value={source} onChange={e=>setSource(e.target.value)}/>
      <div className="actions">
        <label><input type="checkbox" checked={options.collapseSpaces} onChange={e=>toggle("collapseSpaces",e.target.checked)}/> Collapse repeated spaces</label>
        <label><input type="checkbox" checked={options.removeEmptyLines} onChange={e=>toggle("removeEmptyLines",e.target.checked)}/> Remove blank lines</label>
        <label><input type="checkbox" checked={options.deduplicateLines} onChange={e=>toggle("deduplicateLines",e.target.checked)}/> Dedupe lines</label>
        <label><input type="checkbox" checked={options.joinWrappedLines} onChange={e=>toggle("joinWrappedLines",e.target.checked)}/> Join all lines (opt-in)</label>
      </div>
      <p className="subtle">Removes zero-width space / BOM / word joiner; preserves intentional emoji joiners and original line separation unless you choose otherwise.</p>
    </>}
    {mode==="links"&&<>
      <label htmlFor="quick-links-input" className="field-label">Full links · one per line (up to 30)</label>
      <textarea id="quick-links-input" className="field text-editor" rows={5} maxLength={50000} value={urls} onChange={e=>setUrls(e.target.value)}/>
      <p className="subtle">Strips common analytics tags such as utm_*, fbclid and gclid. Retains search parameters, anchors, tokens and URLs that could be necessary for links to work; it does not expand shortened URLs or contact websites.</p>
      {!linkResult.error&&<p className="stat-pill">{linkResult.count} links · {linkResult.removed} tracking parameters removed</p>}
    </>}
    {mode==="replace"&&<>
      <p className="subtle">Literal replacement only (not regular expressions); originals remain unchanged. Preview before exporting. Maximum 200,000 characters.</p>
      <label className="field-label">Input text<textarea className="field text-editor" rows={5} maxLength={200000} value={source} onChange={e=>setSource(e.target.value)}/></label>
      <div className="tools-pair">
        <label className="field-label">Find<input className="field" maxLength={1000} value={findLiteral} onChange={e=>setFindLiteral(e.target.value)}/></label>
        <label className="field-label">Replace with<input className="field" maxLength={10000} value={replacement} onChange={e=>setReplacement(e.target.value)}/></label>
      </div>
      {!replaceResult.error&&<p className="subtle">{replaceResult.count} matches · {output.length} output characters</p>}
    </>}
    {(mode==="text"||mode==="links"||mode==="replace")&&<>
      <label className="field-label" htmlFor="quick-result">Processed output</label>
      <textarea id="quick-result" className="field text-editor" rows={6} value={output} readOnly aria-label="Quick Tool output"/>
      <div className="actions">
        <button className="primary-button" type="button" disabled={!!(mode==="text"?textResult.error:mode==="links"?linkResult.error:replaceResult.error)} onClick={()=>{void copyResult();}}>Copy result</button>
        <button className="secondary-button" type="button" disabled={!!(mode==="text"?textResult.error:linkResult.error)} onClick={()=>{void saveResult();}}>Save as TXT</button>
      </div>
      {(mode==="text"?textResult.error:linkResult.error)&&<p role="alert" className="subtle">{mode==="text"?textResult.error:linkResult.error}</p>}
    </>}
    {mode==="dates"&&<>
      <div className="tools-pair">
        <label className="field-label">From date <input className="field" type="date" value={dateA} onChange={e=>setDateA(e.target.value)}/></label>
        <label className="field-label">To date <input className="field" type="date" value={dateB} onChange={e=>setDateB(e.target.value)}/></label>
      </div>
      <label><input type="checkbox" checked={includeEnd} onChange={e=>setIncludeEnd(e.target.checked)}/> Include both start and end dates</label>
      <div className="tools-pair"><label className="field-label">Move start date by N days (negative allowed)
        <input className="field" type="number" step="1" min="-36525" max="36525" value={shift} onChange={e=>setShift(e.target.value)}/>
      </label></div>
      {dateResult.error?<p role="alert" className="subtle">{dateResult.error}</p>:<pre className="analysis-result" role="status">{`Date difference: ${dateResult.days} calendar days\nDate after offset: ${dateResult.adjusted}`}</pre>}
      <p className="subtle">UTC calendar arithmetic avoids daylight saving time errors. Date range: 1900–2100.</p>
    </>}
    {mode==="grades"&&<>
      <p className="subtle">Each line: Category,Weight %,Grade %. Use ? for a remaining assignment or exam. All weights must add up to 100%.</p>
      <label className="field-label" htmlFor="grade-rows">Grade categories</label>
      <textarea id="grade-rows" className="field text-editor" rows={5} maxLength={5000} value={gradeData} onChange={e=>setGradeData(e.target.value)}/>
      <div className="tools-pair"><label className="field-label">Target final average (%)
        <input className="field" type="number" min="0" max="100" step="any" value={target} onChange={e=>setTarget(e.target.value)}/>
      </label></div>
      {grades.error?<p role="alert" className="subtle">{grades.error}</p>:grades.value&&(()=>{
        const g=grades.value;
        const required=g.required===null
          ? `Course is fully graded. Final score: ${number(g.earned)}%.`
          : g.required>100+1e-8 ? "Target is not reachable with the remaining weight (required > 100%)."
          : g.required<=0 ? "Target already secured even with 0% on remaining items."
          : `Needed average on remaining work: ${number(g.required)}%.`;
        return <pre className="analysis-result" role="status">{[
          `Graded weight: ${number(g.completedWeight)}% · Remaining: ${number(g.remainingWeight)}%`,
          `Current average on graded work: ${g.currentAverage===null?"Not available":number(g.currentAverage)+"%"}`,
          `Points already earned toward final: ${number(g.earned)} / 100`,
          `Best possible final grade: ${number(g.projectedPerfect)}%`,
          required,
        ].join("\n")}</pre>;
      })()}
      <p className="subtle">Assumes all future items average the same score. This is a planning calculator, not an official transcript or GPA conversion.</p>
    </>}
    {status&&<p className="subtle" role="status">{status}</p>}
  </section>;
}
