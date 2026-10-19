import { type ChangeEvent, type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Flashcards from "./components/Flashcards";
import FocusTimer from "./components/FocusTimer";
import EverydayTools, {type Utility} from "./components/EverydayTools";
import ToolLaunchpad from "./components/ToolLaunchpad";
import QuickKitDesk, {type QuickKitMode} from "./components/QuickKitDesk";
import ExternalTools from "./components/ExternalTools";
import CodeDesk from "./components/CodeDesk";
import DataDesk from "./components/DataDesk";
import FileDesk, {type FileTab} from "./components/FileDesk";
import MathDesk, {type MathTab} from "./components/MathDesk";
import StudyExtras, {type StudyMode} from "./components/StudyExtras";
import WritingDesk from "./components/WritingDesk";
import DrawingDesk from "./components/DrawingDesk";
import ReadingHighlights from "./components/ReadingHighlights";
import QuickPresets from "./components/QuickPresets";
import {
  type DeskTask,
  type Priority,
  type WorkspaceData,
  parseWorkspace,
  readWorkspace,
} from "./lib/workspace";
import {
  exportWorkspaceBackup,
  importNativeBackup,
  loadPersistentWorkspace,
  persistWorkspace,
} from "./lib/nativeStorage";

type View = "quick-tools" | "external" | "all-tools" | "code" | "tables" | "overview" | "tasks" | "cards" | "focus" | "notes" | "utilities" | "data" | "files" | "math" | "learning" | "writing" | "drawing" | "reading" | "presets";

const menu: { id: View; name: string; symbol: string; description: string }[] = [
  { id: "overview", name: "Overview", symbol: "◫", description: "Your workspace at a glance" },
  { id: "all-tools", name: "All tools / 全部工具", symbol: "▦", description: "Search and open every available tool" },
  { id: "quick-tools", name: "Quick Tools / 快捷小工具", symbol: "✂", description: "Text cleaning, cleaner links, dates and grades" },
  { id: "external", name: "External Tools / 外部工具", symbol: "↗", description: "Curated official websites for advanced tools" },
  { id: "code", name: "Code editor", symbol: "</>", description: "Local code drafts and snippet library" },
  { id: "tables", name: "CSV Table Desk", symbol: "▤", description: "Filter, sort and export CSV or TSV data" },
  { id: "tasks", name: "Planner", symbol: "✓", description: "Prioritise the next step" },
  { id: "cards", name: "Flashcards", symbol: "Aa", description: "Practise active recall" },
  { id: "focus", name: "Focus timer", symbol: "◷", description: "Make space to focus" },
  { id: "notes", name: "Notes", symbol: "✎", description: "Capture ideas locally" },
  { id: "utilities", name: "Everyday tools", symbol: "⌘", description: "Text, CSV, diff, coding, QR, colors and grouping" },
  { id: "drawing", name: "Black draft board", symbol: "✎", description: "Freehand drawing, annotation and saved PNG" },
  { id: "writing", name: "Write & convert", symbol: "¶", description: "Markdown + LaTeX editor, PDF print and exports" },
  { id: "files", name: "File desk", symbol: "▣", description: "PDF merge/split/rotate, images and Word import" },
  { id: "math", name: "Math & science", symbol: "∑", description: "Calculator, graph, LaTeX, units and vectors" },
  { id: "learning", name: "Study & English", symbol: "✦", description: "Mistake log, exam dates, dictation and instant flip cards" },
  { id: "reading", name: "Reading highlights", symbol: "▧", description: "Select and highlight passages with margin notes" },
  { id: "presets", name: "Link presets", symbol: "↗", description: "Saved short codes for useful websites" },
  { id: "data", name: "Backup & privacy", symbol: "▤", description: "Save or restore your workspace" },
];

function todayIso(): string {
  const date = new Date();
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function taskSort(a: DeskTask, b: DeskTask): number {
  if (a.done !== b.done) return a.done ? 1 : -1;
  const rank = { high: 0, normal: 1, low: 2 };
  return rank[a.priority] - rank[b.priority] || (a.due || "9999").localeCompare(b.due || "9999");
}

export default function App() {
  const [view, setView] = useState<View>("overview");
  const [toolMode,setToolMode] = useState("");
  function openTool(target: string, module?: string) { if (!menu.some(item => item.id === target)) return; setToolMode(module ?? ""); setView(target as View); }
  const [workspace, setWorkspace] = useState<WorkspaceData>(() => readWorkspace());
  const [savedStatus, setSavedStatus] = useState("Loading local workspace...");
  const [storageReady, setStorageReady] = useState(false);
  const saveQueue = useRef<Promise<void>>(Promise.resolve());
  const saveRevision = useRef(0);
  const [draftTask, setDraftTask] = useState("");
  const [taskPriority, setTaskPriority] = useState<Priority>("normal");
  const [taskDue, setTaskDue] = useState("");
  const [filter, setFilter] = useState<"all" | "open" | "done">("all");
  const [textInput, setTextInput] = useState("");
  const [jsonResult, setJsonResult] = useState("");
  const [dataMessage, setDataMessage] = useState("");

  useEffect(() => {
    let active = true;
    void loadPersistentWorkspace().then((data) => {
      if (!active) return;
      setWorkspace(data);
      setStorageReady(true);
    }).catch((error: unknown) => {
      if (!active) return;
      const reason = error instanceof Error ? error.message : String(error);
      // Keep edits in memory but never overwrite an unreadable native file.
      setSavedStatus("Storage unavailable: " + reason + ". Export a backup; changes are not being saved.");
    });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    const revision = ++saveRevision.current;
    setSavedStatus("Saving locally...");
    // Serialise asynchronous native writes: an older write cannot overwrite a newer edit.
    saveQueue.current = saveQueue.current.catch(() => {}).then(() => persistWorkspace(workspace));
    void saveQueue.current.then(() => {
      if (saveRevision.current === revision) setSavedStatus("Saved locally on this device");
    }).catch((error: unknown) => {
      if (saveRevision.current === revision) {
        const reason = error instanceof Error ? error.message : String(error);
        setSavedStatus("Storage error: " + reason + ". Export a backup.");
      }
    });
  }, [workspace, storageReady]);

  const tasks = workspace.tasks;
  const completed = tasks.filter((task) => task.done).length;
  const openTasks = tasks.length - completed;
  const progress = tasks.length ? Math.round(completed / tasks.length * 100) : 0;
  const visibleTasks = useMemo(
    () => [...tasks].filter((task) => filter === "all" || (filter === "done" ? task.done : !task.done)).sort(taskSort),
    [tasks, filter],
  );

  function updateTasks(next: DeskTask[]) {
    setWorkspace((current) => ({ ...current, tasks: next }));
  }

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = draftTask.trim();
    if (!title || tasks.length >= 300) return;
    updateTasks([{ id: crypto.randomUUID(), title: title.slice(0, 180), done: false, priority: taskPriority, due: taskDue }, ...tasks]);
    setDraftTask("");
    setTaskDue("");
  }

  function updateTask(id: string, patch: Partial<DeskTask>) {
    updateTasks(tasks.map((task) => task.id === id ? { ...task, ...patch } : task));
  }

  async function importBackup(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (file.size > 3_000_000) {
      setDataMessage("This backup exceeds the 3 MB import limit.");
      return;
    }
    try {
      const raw: unknown = JSON.parse(await file.text());
      if (typeof raw !== "object" || raw === null || !("version" in raw) ||
          (raw as { version: unknown }).version !== 2 ||
          !("tasks" in raw) || !("cards" in raw) || !("notes" in raw) ||
          !Array.isArray((raw as { tasks: unknown }).tasks) ||
          !Array.isArray((raw as { cards: unknown }).cards) ||
          typeof (raw as { notes: unknown }).notes !== "string") {
        throw new Error("Not a compatible Daily Desk v2 backup.");
      }
      const data = parseWorkspace(raw);
      if (!window.confirm("Replace your current local tasks, cards, and notes with this backup? Export first if you want to keep them.")) {
        setDataMessage("Import cancelled. Your current workspace is unchanged.");
        return;
      }
      setWorkspace(data);
      setStorageReady(true);
      setDataMessage(`Imported ${data.tasks.length} tasks and ${data.cards.length} flashcards.`);
    } catch (error) {
      setDataMessage(error instanceof Error ? error.message : "Could not read this backup.");
    }
  }

  async function importFromNativeDialog() {
    setDataMessage("");
    try {
      const data = await importNativeBackup();
      if (data === null) {
        setDataMessage("Import cancelled.");
        return;
      }
      if (!window.confirm("Replace your existing workspace with this backup? This cannot be undone.")) {
        setDataMessage("Import cancelled. Your workspace is unchanged.");
        return;
      }
      setWorkspace(data);
      setStorageReady(true);
      setDataMessage(`Restored ${data.tasks.length} tasks and ${data.cards.length} flashcards.`);
    } catch (error) {
      setDataMessage(error instanceof Error ? error.message : String(error));
    }
  }

  async function exportBackup() {
    setDataMessage("");
    try {
      const message = await exportWorkspaceBackup(workspace);
      setDataMessage(message);
    } catch (error) {
      setDataMessage(error instanceof Error ? error.message : String(error));
    }
  }

  function renderPlanner() {
    return (
      <section className="panel">
        <div className="section-heading"><div><p className="eyebrow">DAILY PLANNER</p><h2>Make the next step clear.</h2><p className="subtle">{openTasks} open tasks · {completed} completed</p></div><span className="stat-pill">{progress}% complete</span></div>
        <form className="task-form structured" onSubmit={addTask}>
          <label className="sr-only" htmlFor="new-task">New task</label>
          <input id="new-task" className="field" maxLength={180} value={draftTask} onChange={(event) => setDraftTask(event.target.value)} placeholder="Add a task, e.g. Revise calculus notes" />
          <label className="sr-only" htmlFor="task-priority">Priority</label>
          <select id="task-priority" className="field" value={taskPriority} onChange={(event) => setTaskPriority(event.target.value as Priority)}>
            <option value="normal">Normal</option><option value="high">High</option><option value="low">Low</option>
          </select>
          <label className="sr-only" htmlFor="task-due">Due date</label>
          <input id="task-due" className="field date-field" type="date" value={taskDue} onChange={(event) => setTaskDue(event.target.value)} />
          <button type="submit" className="primary-button" disabled={!draftTask.trim() || tasks.length >= 300}>Add</button>
        </form>
        <div className="pill-row compact" role="group" aria-label="Filter tasks">
          {(["all", "open", "done"] as const).map((item) => <button type="button" key={item} onClick={() => setFilter(item)} className={filter === item ? "pill active-pill" : "pill"}>{item === "all" ? "All tasks" : item === "open" ? "Open" : "Completed"}</button>)}
        </div>
        <div className="task-list">
          {visibleTasks.length === 0 && <p className="empty-state">No tasks in this view. Add your next step above.</p>}
          {visibleTasks.map((task) => (
            <div className="task-row" key={task.id}>
              <input type="checkbox" checked={task.done} onChange={() => updateTask(task.id, { done: !task.done })} aria-label={`Mark ${task.title} as ${task.done ? "not completed" : "completed"}`} />
              <div className="task-copy"><span className={task.done ? "task-title done" : "task-title"}>{task.title}</span><span className="task-meta">{task.priority} priority{task.due ? ` · due ${task.due}` : ""}{task.due && task.due < todayIso() && !task.done ? " · overdue" : ""}</span></div>
              <button type="button" className="icon-button" aria-label={`Remove task ${task.title}`} onClick={() => updateTasks(tasks.filter((item) => item.id !== task.id))}>×</button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function renderUtilities() {
    const words = textInput.trim() ? textInput.trim().split(/\s+/u).length : 0;
    return (
      <section className="panel">
        <p className="eyebrow">QUICK UTILITIES</p><h2>Text desk</h2><p className="subtle">Count words, characters, and lines, or validate and format JSON. Input stays on this screen.</p>
        <label className="field-label" htmlFor="text-tool-input">Text input</label>
        <textarea className="field text-editor" id="text-tool-input" rows={10} value={textInput} onChange={(event) => setTextInput(event.target.value)} placeholder="Paste a paragraph, Markdown or JSON…" />
        <div className="metrics"><span><strong>{words}</strong> words</span><span><strong>{textInput.length}</strong> characters</span><span><strong>{textInput ? textInput.split(/\r?\n/u).length : 0}</strong> lines</span></div>
        <div className="actions"><button className="primary-button" type="button" onClick={() => { try { setJsonResult(JSON.stringify(JSON.parse(textInput) as unknown, null, 2)); } catch (error) { setJsonResult(error instanceof Error ? `Invalid JSON: ${error.message}` : "Invalid JSON"); } }}>Format JSON</button><button className="secondary-button" type="button" onClick={() => { setTextInput(""); setJsonResult(""); }}>Clear</button></div>
        {jsonResult && <><label className="field-label" htmlFor="formatted-json">JSON result</label><textarea id="formatted-json" className="field text-editor" value={jsonResult} rows={8} readOnly /></>}
      </section>
    );
  }

  const activeMenu = menu.find((item) => item.id === view) ?? menu[0];

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">D</div><div className="brand-name">Daily Desk</div>
        <p className="brand-caption">LOCAL-FIRST PRODUCTIVITY</p>
        <div className="nav-label">WORKSPACES</div>
        <nav aria-label="Daily Desk navigation">
          {menu.map((item) => (
            <button type="button" key={item.id} className={view === item.id ? "nav-item active" : "nav-item"} aria-current={view === item.id ? "page" : undefined} onClick={() => {setToolMode("");setView(item.id);}}>
              <span aria-hidden="true">{item.symbol}</span><span>{item.name}</span>{item.id === "tasks" && <span className="nav-count">{openTasks}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom"><span className="status-dot" /> <span role="status">{savedStatus}</span><p>No sign-in. No Vercel connection. Native app data is stored locally; export a backup before changing computers.</p></div>
      </aside>

      <section className="main-panel">
        <header className="topbar"><span>Daily Desk / {activeMenu.name}</span><span className="version-pill">DESKTOP PREVIEW · v0.18</span></header>
        <div className="content">
          {view === "overview" && <>
            <p className="eyebrow">GOOD TO HAVE YOU HERE</p><h1>Your day, in one place.</h1>
            <p className="intro">Your local workspace for study, planning and lightweight office tools. Every module opens independently of the AP website.</p>
            <div className="hero-card"><div><p className="card-eyebrow">TODAY AT A GLANCE</p><h2>Small steps add up.</h2><p>{openTasks} things left to do · {workspace.cards.length} flashcards ready</p></div><div className="progress-summary"><strong>{progress}%</strong><span>of tasks complete</span></div></div>
            <div className="section-heading"><div><h2>Open a tool</h2><p>Choose a focused workspace.</p></div></div>
            <div className="tool-grid">{menu.filter((item) => item.id !== "overview").map((item) => <button type="button" key={item.id} className="tool-card" onClick={() => {setToolMode("");setView(item.id);}}><span className="tool-icon">{item.symbol}</span><strong>{item.name}</strong><span className="subtle">{item.description}</span><span className="tool-state">OPEN TOOL →</span></button>)}</div>
          </>}
          {view === "tasks" && renderPlanner()}
          {view === "cards" && <Flashcards cards={workspace.cards} onChange={(cards) => setWorkspace((current) => ({ ...current, cards }))} />}
          <div hidden={view !== "focus"}><FocusTimer /></div>
          {view === "notes" && <section className="panel"><p className="eyebrow">LOCAL NOTES</p><h2>Keep ideas close at hand.</h2><p className="subtle">Your notes are automatically saved in this application. Export backups in Backup & privacy.</p><label className="field-label" htmlFor="my-notes">My notebook</label><textarea id="my-notes" className="field text-editor" rows={20} maxLength={50000} placeholder="Capture a thought, write a draft or summarise a concept…" value={workspace.notes} onChange={(event) => setWorkspace((current) => ({ ...current, notes: event.target.value }))}/><p className="subtle">{workspace.notes.length.toLocaleString()} characters</p></section>}
          {view === "all-tools" && <ToolLaunchpad onLaunch={openTool} />}
          {view === "quick-tools" && <QuickKitDesk key={toolMode} initialMode={(toolMode||"text") as QuickKitMode} />}
          {view === "external" && <ExternalTools onOpenPresets={()=>openTool("presets")} />}
          {view === "code" && <CodeDesk snippets={workspace.snippets??[]} onChange={snippets=>setWorkspace(current=>({...current,snippets}))} />}
          {view === "tables" && <DataDesk />}
          {view === "utilities" && <EverydayTools key={toolMode} initial={(toolMode || "stats") as Utility} />}
          {view === "files" && <FileDesk key={toolMode} initialPdfMode={toolMode === "organize" ? "organize" : toolMode === "decorate" ? "decorate" : toolMode === "convert" ? "convert" : "merge"} initialTab={(toolMode === "organize" || toolMode === "decorate" || toolMode === "convert" ? "pdf" : toolMode || "pdf") as FileTab} onSendToWriting={markdown => {setWorkspace(current => ({...current, documentMarkdown: markdown})); setView("writing");}} />}
          {view === "math" && <MathDesk key={toolMode} initialTab={(toolMode||"calculator") as MathTab} />}
          {view === "learning" && <StudyExtras key={toolMode} initialMode={(toolMode||"countdown") as StudyMode} workspace={workspace} onChange={setWorkspace} />}
          {view === "reading" && <ReadingHighlights text={workspace.readingText ?? ""} highlights={workspace.highlights ?? []} onChange={(text, highlights)=>setWorkspace(current=>({...current,readingText:text,highlights}))} />}
          {view === "presets" && <QuickPresets presets={workspace.presets ?? []} onChange={presets=>setWorkspace(current=>({...current,presets}))} />}
          {view === "writing" && <WritingDesk markdown={workspace.documentMarkdown ?? ""} onChange={value=>setWorkspace(current=>({...current,documentMarkdown:value}))}/>}
          {view === "drawing" && <DrawingDesk strokes={workspace.drawing ?? []} onChange={value=>setWorkspace(current=>({...current,drawing:value}))}/>}
          {view === "data" && <section className="panel"><p className="eyebrow">PORTABLE WORKSPACE</p><h2>Backup & privacy</h2><p className="subtle">The desktop app now saves tasks, flashcards and notes in its own local app-data file using atomic writes. A browser preview still uses localStorage. Nothing is synced to the AP website or Vercel.</p><div className="actions"><button className="primary-button" type="button" onClick={() => { void exportBackup(); }}>Export JSON backup</button><button className="secondary-button" type="button" onClick={() => { void importFromNativeDialog(); }}>Import with native file picker</button></div><div className="import-group"><label className="field-label" htmlFor="import-workspace">Or restore from a Daily Desk v2 JSON backup using a file input</label><input className="field" type="file" id="import-workspace" accept=".json,application/json" onChange={(event) => { void importBackup(event); }} /></div>{dataMessage && <p className="subtle" role="status">{dataMessage}</p>}<p className="subtle">Tip: Export a backup before reinstalling or changing devices. Import replaces the current workspace only after confirmation.</p></section>}
          <footer>DAILY DESK <span>Separate desktop app · Knowledge-Explorer monorepo</span></footer>
        </div>
      </section>
    </main>
  );
}
