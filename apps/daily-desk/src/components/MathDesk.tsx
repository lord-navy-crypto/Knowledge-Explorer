import { useMemo, useState } from "react";
import { compile, evaluate } from "mathjs";
import katex from "katex";
import { combineVectors, significantFigures, roundSignificant } from "../lib/mathExtras";
import "katex/dist/katex.min.css";

type MathTab = "calculator" | "graph" | "units" | "notation" | "vector" | "formula" | "latex";
const FORMULAS = [
  { title: "Newton's second law", math: "F_{net}=ma" },
  { title: "Kinematic displacement", math: "\\Delta x = v_0 t + \\frac12 at^2" },
  { title: "Work", math: "W=Fd\\cos\\theta" },
  { title: "Electric field", math: "E=\\frac{F}{q}" },
  { title: "Ohm's law", math: "V=IR" },
  { title: "Capacitance", math: "C=\\frac{Q}{V}" },
  { title: "Derivative", math: "\\frac{d}{dx} x^n = nx^{n-1}" },
  { title: "Normal distribution", math: "z=\\frac{x-\\mu}{\\sigma}" },
];
const UNITS: Record<string, Record<string, number>> = {
  Length: { m: 1, km: 1000, cm: .01, mm: .001, mi: 1609.344, ft: .3048, in: .0254 },
  Mass: { kg: 1, g: .001, mg: .000001, lb: .45359237 },
  Time: { s: 1, ms: .001, min: 60, h: 3600, day: 86400 },
  Energy: { J: 1, kJ: 1000, Wh: 3600, kWh: 3600000, eV: 1.602176634e-19 },
  Pressure: { Pa: 1, kPa: 1000, bar: 100000, atm: 101325, psi: 6894.757293 },
  Speed: { "m/s": 1, "km/h": 1/3.6, mph: .44704, kn: .514444 },
};
type Point={x:number;y:number};
function graphPoints(expression:string):Point[][] {
  if(!expression.trim())return [];
  const compiled=compile(expression);
  const lines:Point[][]=[];
  let segment:Point[]=[];
  for(let i=0;i<=500;i++){
    const x=-10+i/25;
    try {
      const result=compiled.evaluate({x});
      if(typeof result!=="number" || !Number.isFinite(result) || Math.abs(result)>100) {
        if(segment.length>1)lines.push(segment);
        segment=[];continue;
      }
      segment.push({x,y:result});
    }catch {
      if(segment.length>1)lines.push(segment);
      segment=[];
    }
  }
  if(segment.length>1)lines.push(segment);
  return lines;
}
export default function MathDesk(){
  const [tab,setTab]=useState<MathTab>("calculator");
  const [expression,setExpression]=useState("sin(pi/2) + sqrt(16)");
  const [result,setResult]=useState("");
  const [plot,setPlot]=useState(["sin(x)","cos(x)"]);
  const [unitType,setUnitType]=useState("Length");
  const [from,setFrom]=useState("m");
  const [to,setTo]=useState("km");
  const [unitAmount,setUnitAmount]=useState(1000);
  const [notation,setNotation]=useState("12345.678");
  const [otherNumber,setOtherNumber]=useState("2.1");
  const [sigDigits,setSigDigits]=useState(3);
  const [sigOperation,setSigOperation]=useState<"multiply"|"divide">("multiply");
  const [magnitude,setMagnitude]=useState(10);
  const [angle,setAngle]=useState(30);
  const [magnitudeB,setMagnitudeB]=useState(5);
  const [angleB,setAngleB]=useState(120);
  const [vectorOperation,setVectorOperation]=useState<"add"|"subtract">("add");
  const [latex,setLatex]=useState("E=mc^2");
  const [status,setStatus]=useState("");
  const [yScale,setYScale]=useState(10);
  const graph=useMemo(()=>plot.map(expression=>{try{return graphPoints(expression)}catch{return [] as Point[][]}}),[plot]);
  const viewBox="0 0 620 400";
  const px=(x:number)=>310+x*31;
  const py=(y:number)=>200-y*(200/yScale);
  const formatted=useMemo(()=>{const n=Number(notation);return Number.isFinite(n)?n.toExponential(5):"Not a number";},[notation]);
  const sigCount=significantFigures(notation);
  const sigCountB=significantFigures(otherNumber);
  const arithmetic=Number(notation) * (sigOperation==="multiply" ? Number(otherNumber) : 1);
  const preciseResult=sigOperation==="divide" ? Number(notation)/Number(otherNumber) : arithmetic;
  let sigResult="Enter valid nonzero numbers";
  try { if(Number.isFinite(preciseResult)) sigResult=roundSignificant(preciseResult,sigDigits); } catch { /* invalid input shown above */ }
  const vectorResult=combineVectors({magnitude,angle},{magnitude:magnitudeB,angle:angleB},vectorOperation==="subtract");
  const currentUnits=UNITS[unitType];
  const converted=unitAmount*currentUnits[from]/currentUnits[to];
  const mathHtml=useMemo(()=>{try{return katex.renderToString(latex,{throwOnError:false,trust:false,output:"html"})}catch{return ""}},[latex]);

  function switchUnits(group:string){
    const names=Object.keys(UNITS[group]);
    setUnitType(group);setFrom(names[0]);setTo(names[1]);
  }
  return <section className="panel">
    <p className="eyebrow">MATH WORKBENCH · LOCAL CALCULATIONS</p><h2>Math & science utilities</h2>
    <p className="subtle">Calculator, graphs, units, vectors, scientific notation, formulas and LaTeX. Calculation runs locally; the graph preview is a simpler subset of the website's advanced grapher.</p>
    <div className="pill-row" role="group" aria-label="Math tool">{(["calculator","graph","units","notation","vector","formula","latex"] as const).map(k=><button className={tab===k?"pill active-pill":"pill"} key={k} onClick={()=>{setTab(k);setStatus("");}} type="button">{k[0].toUpperCase()+k.slice(1)}</button>)}</div>
    {tab==="calculator"&&<>
      <label htmlFor="calc-expression" className="field-label">Expression · sin, cos, sqrt, log, pi, matrices</label>
      <input className="field" style={{width:"100%"}} id="calc-expression" value={expression} onChange={e=>setExpression(e.target.value)} />
      <div className="actions"><button className="primary-button" type="button" onClick={()=>{try{const value: unknown = evaluate(expression);setResult(String(value));setStatus("");}catch(e){setStatus(String(e));}}}>Calculate</button></div>
      {result&&<p className="stat-pill" role="status">{result}</p>}
    </>}
    {tab==="graph"&&<>
      <p className="subtle">Plot functions of x for x = −10 to 10. Discontinuities may not be perfectly represented.</p>
      {plot.map((expr,i)=><label key={i} className="field-label">Y{i+1} <input className="field" style={{width:"80%"}} value={expr} onChange={e=>setPlot(p=>p.map((s,k)=>k===i?e.target.value:s))}/></label>)}
      <div className="actions"><button type="button" className="secondary-button" onClick={()=>setPlot(p=>p.length<4?[...p,"x^2"]:p)} disabled={plot.length===4}>Add function</button>
      <label>Y range ± <input className="field" type="number" min={1} max={1000} value={yScale} onChange={e=>setYScale(Math.max(1,Math.min(1000,Number(e.target.value)||10)))}/></label></div>
      <svg className="math-graph" viewBox={viewBox} role="img" aria-label="Cartesian graph of selected functions">
        <rect width="620" height="400" fill="#fff"/>
        {Array.from({length:21},(_,i)=><line key={"x"+i} x1={i*31} y1="0" x2={i*31} y2="400" stroke="#edf1f6"/>)}
        {Array.from({length:11},(_,i)=><line key={"y"+i} y1={i*40} x1="0" y2={i*40} x2="620" stroke="#edf1f6"/>)}
        <line x1="0" y1="200" x2="620" y2="200" stroke="#8d9eb6" strokeWidth="2"/>
        <line x1="310" y1="0" x2="310" y2="400" stroke="#8d9eb6" strokeWidth="2"/>
        {graph.flatMap((groups,i)=>groups.map((points,j)=><polyline key={i+"-"+j} points={points.map(p=>`${px(p.x)},${py(p.y)}`).join(" ")} fill="none" stroke={["#3861a5","#bf7047","#548864","#98599a"][i]} strokeWidth="2" clipPath="url(#clip-graph)"/>))}
        <defs><clipPath id="clip-graph"><rect width="620" height="400"/></clipPath></defs>
      </svg>
    </>}
    {tab==="units"&&<>
      <label className="field-label">Quantity <select className="field" value={unitType} onChange={e=>switchUnits(e.target.value)}>{Object.keys(UNITS).map(k=><option key={k}>{k}</option>)}</select></label>
      <div className="tools-pair">
        <label className="field-label">Value <input type="number" className="field" value={unitAmount} onChange={e=>setUnitAmount(Number(e.target.value))}/></label>
        <label className="field-label">From <select className="field" value={from} onChange={e=>setFrom(e.target.value)}>{Object.keys(currentUnits).map(k=><option key={k}>{k}</option>)}</select></label>
        <label className="field-label">To <select className="field" value={to} onChange={e=>setTo(e.target.value)}>{Object.keys(currentUnits).map(k=><option key={k}>{k}</option>)}</select></label>
      </div><p className="stat-pill" role="status">{Number.isFinite(converted)?converted.toPrecision(9):"Invalid input"} {to}</p>
      <p className="subtle">Common constants: g≈9.80665 m/s² · c=299,792,458 m/s · h=6.62607015×10⁻³⁴ J·s</p>
    </>}
    {tab==="notation"&&<>
      <label className="field-label" htmlFor="notation-number">First number (as written)</label>
      <input id="notation-number" className="field" value={notation} onChange={e=>setNotation(e.target.value)}/>
      <div className="metrics"><span>Scientific notation: {formatted}</span><span>Estimated significant figures: {sigCount??"invalid"}</span></div>
      <div className="tools-pair">
        <label className="field-label">Second number <input className="field" value={otherNumber} onChange={e=>setOtherNumber(e.target.value)}/></label>
        <label className="field-label">Operation <select className="field" value={sigOperation} onChange={e=>setSigOperation(e.target.value as "multiply"|"divide")}><option value="multiply">Multiply</option><option value="divide">Divide</option></select></label>
        <label className="field-label">Result significant figures <input className="field" type="number" min={1} max={15} value={sigDigits} onChange={e=>setSigDigits(Math.max(1,Math.min(15,Number(e.target.value)||1)))}/></label>
      </div>
      <p className="stat-pill">Rounded result: {sigResult}</p>
      <p className="subtle">Second input has {sigCountB??"unknown"} significant figures. The count of terminal zeros in an integer without a decimal point is ambiguous. Choose the result precision deliberately.</p>
    </>}
    {tab==="vector"&&<>
      <div className="tools-pair">
        <label className="field-label">Vector A magnitude <input className="field" type="number" value={magnitude} onChange={e=>setMagnitude(Number(e.target.value))}/></label>
        <label className="field-label">Vector A angle (°) <input className="field" type="number" value={angle} onChange={e=>setAngle(Number(e.target.value))}/></label>
        <label className="field-label">Vector B magnitude <input className="field" type="number" value={magnitudeB} onChange={e=>setMagnitudeB(Number(e.target.value))}/></label>
        <label className="field-label">Vector B angle (°) <input className="field" type="number" value={angleB} onChange={e=>setAngleB(Number(e.target.value))}/></label>
      </div>
      <label className="field-label">Combine vectors <select className="field" value={vectorOperation} onChange={e=>setVectorOperation(e.target.value as "add"|"subtract")}><option value="add">A + B</option><option value="subtract">A − B</option></select></label>
      <div className="metrics"><span>Rx = {vectorResult.x.toFixed(5)}</span><span>Ry = {vectorResult.y.toFixed(5)}</span><span>|R| = {vectorResult.magnitude.toFixed(5)}</span><span>θ = {vectorResult.angle.toFixed(3)}°</span></div>
    </>}
    {tab==="formula"&&<div className="tool-grid">{FORMULAS.map(row=><article key={row.title} className="tool-card"><strong>{row.title}</strong><div className="math-formula" dangerouslySetInnerHTML={{__html:katex.renderToString(row.math,{throwOnError:false,trust:false})}}/><button type="button" className="secondary-button" onClick={()=>{void navigator.clipboard.writeText(row.math).then(()=>setStatus("Copied LaTeX")).catch(()=>setStatus("Clipboard unavailable"));}}>Copy LaTeX</button></article>)}</div>}
    {tab==="latex"&&<>
      <label className="field-label" htmlFor="latex-input">LaTeX input</label><textarea className="field" rows={5} id="latex-input" value={latex} onChange={e=>setLatex(e.target.value)}/>
      <div className="math-formula math-preview" dangerouslySetInnerHTML={{__html:mathHtml}}/>
    </>}
    {status&&<p className="subtle" role="status">{status}</p>}
  </section>;
}
