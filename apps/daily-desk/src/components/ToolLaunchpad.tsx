import {useMemo,useState} from "react";

export type LocalTool = {id:string;name:string;area:string;view:string;module?:string};
export const LOCAL_TOOLS:LocalTool[] = [
 {id:"qr-studio-batch",name:"Free QR Studio · Wi-Fi, vCard, SVG Batch ZIP",area:"Classroom",view:"universal-box",module:"qr"},
 {id:"ics-calendar",name:"Calendar Invite File Generator (.ics) · No Account",area:"Office",view:"universal-box",module:"calendar"},
 {id:"uuid-batch",name:"Cryptographic UUID v4 Batch Generator",area:"Code",view:"universal-box",module:"uuid"},
 {id:"json-to-csv",name:"JSON Records → CSV · Safe Export",area:"Data",view:"universal",module:"json-csv"},
 {id:"world-meeting-clock",name:"World Meeting Clock · 国际时区对照",area:"Study",view:"universal",module:"timezones"},
 {id:"sha256-check",name:"SHA-256 File Checksum Verifier",area:"Files",view:"universal",module:"checksum"},
 {id:"secure-password",name:"Local Password Generator",area:"Privacy",view:"universal",module:"password"},
 {id:"photo-metadata-clean",name:"Image Metadata Cleaner · 照片隐私清理",area:"Privacy",view:"universal",module:"image-privacy"},
 {id:"quick-clean-text",name:"Text Cleaner · 一键文本整理",area:"Text",view:"quick-tools",module:"text"},
 {id:"quick-clean-links",name:"Tracking Link Cleaner · 清理追踪链接",area:"Text",view:"quick-tools",module:"links"},
 {id:"quick-date",name:"Date Difference & Date Shift",area:"Study",view:"quick-tools",module:"dates"},
 {id:"quick-grade",name:"Weighted Grade & Exam Target",area:"Study",view:"quick-tools",module:"grades"},
 {id:"calculator",name:"Calculator / 计算器",area:"Math",view:"math",module:"calculator"},
 {id:"graph",name:"Advanced Graph / 高级绘图",area:"Math",view:"math",module:"graph"},
 {id:"calculus",name:"Derivatives, Integrals & Roots",area:"Math",view:"math",module:"calculus"},
 {id:"math-extras",name:"BASE-N, Equations, Statistics, Matrix",area:"Math",view:"math",module:"extras"},
 {id:"classwiz",name:"Advanced Calculator · Complex / Matrix / Regression / Probability",area:"Math",view:"math",module:"classwiz"},
 {id:"formula-board",name:"Formula Board",area:"Math",view:"math",module:"formula"},
 {id:"latex",name:"LaTeX Preview",area:"Math",view:"math",module:"latex"},
 {id:"units",name:"Full Units · Temperature · Physical Constants",area:"Math",view:"math",module:"units"},
 {id:"sci-notation",name:"Scientific Notation & Sig Figs",area:"Math",view:"math",module:"notation"},
 {id:"vector",name:"Vector Arithmetic",area:"Math",view:"math",module:"vector"},
 {id:"focus",name:"Pomodoro / Focus Sound",area:"Study",view:"focus"},
 {id:"flashcards",name:"Saved Flashcards & Vocabulary",area:"Study",view:"cards"},
 {id:"paste-flashcards",name:"Instant Paste Flashcards",area:"Study",view:"learning",module:"paste"},
 {id:"mistakes",name:"Mistake Notebook",area:"Study",view:"learning",module:"mistakes"},
 {id:"countdown",name:"Exam Countdown",area:"Study",view:"learning",module:"countdown"},
 {id:"dictation",name:"Dictation Practice",area:"Study",view:"learning",module:"dictation"},
 {id:"rewrite",name:"Paraphrase Comparator",area:"Study",view:"learning",module:"rewrite"},
 {id:"reading",name:"Reading Highlight & Notes",area:"Study",view:"reading"},
 {id:"typewriter",name:"Typewriter Memory Mode",area:"Study",view:"learning",module:"typewriter"},
 {id:"code-editor",name:"Code Editor / 代码编辑器",area:"Code",view:"code"},
 {id:"code-board",name:"Saved Code Snippets",area:"Code",view:"learning",module:"code"},
 {id:"json",name:"JSON Formatter",area:"Text",view:"utilities",module:"json"},
 {id:"base64",name:"Base64 / URL Encode",area:"Text",view:"utilities",module:"encode"},
 {id:"word-count",name:"Word Counter",area:"Text",view:"utilities",module:"stats"},
 {id:"text-diff",name:"Text Comparator",area:"Text",view:"utilities",module:"diff"},
 {id:"csv",name:"CSV → Markdown",area:"Text",view:"utilities",module:"csv"},
 {id:"csv-table",name:"CSV / TSV Table Desk · 表格筛选、排序及导出",area:"Files",view:"tables"},
 {id:"markdown-plain",name:"Markdown → Plain Text",area:"Text",view:"utilities",module:"markdown"},
 {id:"write",name:"Markdown / Word Editor",area:"Writing",view:"writing"},
 {id:"notes",name:"Quick Notes",area:"Writing",view:"notes"},
 {id:"drawing",name:"Black Draft Board",area:"Writing",view:"drawing"},
 {id:"pdf",name:"PDF Preview & Tools",area:"Files",view:"files",module:"pdf"},
 {id:"pdf-freedom",name:"PDF Freedom Studio · Add Text, Page Numbers, Watermarks, Signatures",area:"Files",view:"files",module:"decorate"},
 {id:"pdf-converters",name:"Image ↔ PDF · PNG/JPEG to PDF, PDF Pages to ZIP",area:"Files",view:"files",module:"convert"},
 {id:"pdf-organize",name:"PDF Reorder / Delete Pages",area:"Files",view:"files",module:"organize"},
 {id:"image",name:"Image Resize, Crop & Convert",area:"Files",view:"files",module:"images"},
 {id:"image-interactive-crop",name:"Interactive Crop · 比例裁剪与旋转",area:"Files",view:"files",module:"images"},
 {id:"image-batch",name:"Batch Image Conversion → ZIP",area:"Files",view:"files",module:"images"},
 {id:"docx",name:"Word → Markdown / PDF Preview",area:"Files",view:"files",module:"word"},
 {id:"rename",name:"Batch Rename Copies",area:"Files",view:"utilities",module:"rename"},
 {id:"color",name:"Color Contrast",area:"Classroom",view:"utilities",module:"color"},
 {id:"qr",name:"Basic QR Code / 简单二维码",area:"Classroom",view:"utilities",module:"qr"},
 {id:"groups",name:"Random Picker & Groups",area:"Classroom",view:"utilities",module:"groups"},
 {id:"presets",name:"Short Codes / Link Presets",area:"Classroom",view:"presets"},
 {id:"planner",name:"Tasks & Planner",area:"Study",view:"tasks"},
 {id:"backup",name:"Backup & Privacy",area:"Files",view:"data"}
];
const NOT_LOCAL = ["Website AI / cloud models (needs configured AI connection)", "Speech-to-text transcription (microphone and speech engine integration)", "Public short-link hosting and shared workspaces"];

export default function ToolLaunchpad({onLaunch}:{onLaunch:(view:string,module?:string)=>void}) {
 const [search,setSearch]=useState("");
 const [category,setCategory]=useState("All");
 const groups=["All", ...Array.from(new Set(LOCAL_TOOLS.map(item=>item.area)))];
 const filtered=useMemo(()=>LOCAL_TOOLS.filter(item=>(category==="All"||item.area===category) && (item.name+" "+item.id+" "+item.area).toLowerCase().includes(search.toLowerCase())),[category,search]);
 return <section className="panel">
   <p className="eyebrow">ALL EVERYDAY TOOLS · ONE CLICK</p>
   <h2>All tools / 全部小工具</h2>
   <p className="subtle">Search the website's everyday tool equivalents in the standalone Mac app. Click to open the real local feature, not a web link.</p>
   <div className="actions">
     <label htmlFor="all-tools-search" className="field-label">Search / 搜索</label>
     <input className="field" id="all-tools-search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="PDF, CSV, vector, QR, code..."/>
     <label className="field-label" htmlFor="all-tools-category">Category</label>
     <select id="all-tools-category" className="field" value={category} onChange={e=>setCategory(e.target.value)}>{groups.map(c=><option key={c}>{c}</option>)}</select>
   </div>
   <p className="subtle">{filtered.length} local tool entries · no need to open separate website tabs.</p>
   <div className="tool-grid">{filtered.map(item=><button key={item.id} className="tool-card" type="button" onClick={()=>onLaunch(item.view,item.module)}>
      <strong>{item.name}</strong><span className="subtle">{item.area}</span><span className="tool-state">OPEN TOOL →</span>
   </button>)}</div>
   <h3>Need more specialized features?</h3>
   <p className="subtle">The curated External Tools hub opens official third-party websites explicitly in your default browser. No outside website is treated as a local feature.</p>
   <button className="secondary-button" type="button" onClick={()=>onLaunch("external")}>Browse External Tools ↗</button>
   <h3>Not represented as offline equivalents</h3>
   <p className="subtle">{NOT_LOCAL.join(" · ")}. These cannot be honestly claimed as copied into the local application.</p>
 </section>;
}
