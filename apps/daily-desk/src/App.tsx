import { useEffect, useMemo, useState } from "react";

type Task = { id: string; title: string; done: boolean };
type Tool = { title: string; description: string; kind: "ready" | "planned" };

const STORAGE_KEY = "daily-desk.tasks.v1";
const tools: Tool[] = [
  { title: "Quick planner", description: "Capture small tasks and track progress.", kind: "ready" },
  { title: "Vocabulary cards", description: "Create decks and practise active recall.", kind: "planned" },
  { title: "Study sessions", description: "Focus timers and reusable study blocks.", kind: "planned" },
  { title: "Notes & writing", description: "Keep lightweight notes beside your work.", kind: "planned" },
  { title: "PDF desk", description: "Organise common document tasks locally.", kind: "planned" },
  { title: "Quick utilities", description: "A focused home for small daily tools.", kind: "planned" },
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [draft, setDraft] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const value: unknown = JSON.parse(saved);
        if (Array.isArray(value)) {
          setTasks(value.filter((item): item is Task =>
            item !== null && typeof item === "object" &&
            typeof item.id === "string" && typeof item.title === "string" &&
            typeof item.done === "boolean"
          ).slice(0, 200));
        }
      }
    } catch {
      // Corrupt or unavailable local storage must not prevent launch.
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); } catch {
      // The planner remains usable for this session if storage is unavailable.
    }
  }, [tasks, loaded]);

  const complete = tasks.filter((task) => task.done).length;
  const progress = useMemo(() => tasks.length ? Math.round(complete / tasks.length * 100) : 0, [complete, tasks.length]);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;
    setTasks((current) => [{ id: crypto.randomUUID(), title, done: false }, ...current].slice(0, 200));
    setDraft("");
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">D</div>
        <div className="brand-name">Daily Desk</div>
        <p className="brand-caption">YOUR PERSONAL WORKSPACE</p>
        <div className="nav-label">WORKSPACE</div>
        <div className="nav-item active"><span>◫</span> Overview</div>
        <div className="nav-item"><span>✓</span> My tasks <span className="nav-count">{tasks.filter((t) => !t.done).length}</span></div>
        <div className="nav-item"><span>▤</span> Study tools</div>
        <div className="nav-item"><span>✎</span> Notes <span className="soon">Soon</span></div>
        <div className="sidebar-bottom"><span className="status-dot" /> Local-first workspace<p>Your tasks stay in this app's browser storage.</p></div>
      </aside>

      <section className="main-panel">
        <header className="topbar"><span>Workspace / Overview</span><span className="version-pill">DESKTOP PREVIEW · v0.1.0</span></header>
        <div className="content">
          <p className="eyebrow">A CLEARER WAY TO WORK</p>
          <h1>Your day, in one place.</h1>
          <p className="intro">Plan your next step, make time to focus, and keep your everyday study tools close at hand.</p>

          <section className="hero-card">
            <div><p className="card-eyebrow">TODAY'S PLAN</p><h2>Small steps add up.</h2><p className="muted">Start with one task you can move forward right now.</p></div>
            <div className="progress-ring" style={{ "--progress": progress } as React.CSSProperties}><strong>{progress}%</strong><span>COMPLETE</span></div>
          </section>

          <div className="section-heading"><div><h2>Task list</h2><p>Quick capture for things you want to get done.</p></div><span className="task-count">{complete} / {tasks.length} done</span></div>
          <form className="task-form" onSubmit={addTask}>
            <label className="sr-only" htmlFor="new-task">New task</label>
            <input id="new-task" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={160} placeholder="Add a task — e.g. Review today's vocabulary" />
            <button type="submit" disabled={!draft.trim()}>Add task <span>＋</span></button>
          </form>
          <div className="task-list">
            {!loaded ? <p className="empty-state">Loading saved tasks…</p> : tasks.length === 0 ? <p className="empty-state">Your task list is clear. Add one small next step above.</p> : tasks.map((task) => (
              <div className="task-row" key={task.id}>
                <input type="checkbox" checked={task.done} onChange={() => setTasks((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))} aria-label={`Mark ${task.title} as ${task.done ? "not done" : "done"}`} />
                <span className={task.done ? "task-title done" : "task-title"}>{task.title}</span>
                <button className="remove-button" type="button" onClick={() => setTasks((current) => current.filter((item) => item.id !== task.id))} aria-label={`Remove ${task.title}`}>×</button>
              </div>
            )) }
          </div>

          <div className="section-heading tools-heading"><div><h2>Your toolkit</h2><p>A growing collection of focused everyday tools.</p></div></div>
          <div className="tool-grid">{tools.map((tool, index) => <article className="tool-card" key={tool.title}><div className={`tool-icon icon-${index}`}>{["✓","Aa","◷","✎","▤","⌘"][index]}</div><div className="tool-card-title">{tool.title}</div><p>{tool.description}</p><span className={tool.kind === "ready" ? "tool-state available" : "tool-state"}>{tool.kind === "ready" ? "AVAILABLE NOW" : "PLANNED MODULE"}</span></article>)}</div>
          <footer>DAILY DESK <span>Independent desktop application · Not part of the AP website</span></footer>
        </div>
      </section>
    </main>
  );
}
