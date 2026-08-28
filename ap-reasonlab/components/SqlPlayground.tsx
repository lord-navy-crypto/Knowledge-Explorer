"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PlaygroundExtras from "@/components/PlaygroundExtras";
import CodeLangOfficialStrip from "@/components/CodeLangOfficialStrip";
import { usePlaygroundHandoffNotice } from "@/lib/use-playground-handoff";
import { usePlaygroundShortcuts } from "@/lib/use-playground-shortcuts";
import { copySource } from "@/lib/playground-export";

type Example = { id: string; title: string; code: string };

type Props = {
  examples: Example[];
  storageKey?: string;
};

type SqlJsDatabase = {
  run: (sql: string) => void;
  exec: (sql: string) => Array<{ columns: string[]; values: unknown[][] }>;
  close: () => void;
  export: () => Uint8Array;
};

type SqlJsStatic = {
  Database: new (data?: Uint8Array) => SqlJsDatabase;
};

declare global {
  interface Window {
    initSqlJs?: (config?: { locateFile?: (file: string) => string }) => Promise<SqlJsStatic>;
  }
}

const SQL_JS_VERSION = "1.12.0";
const SQL_CDN = `https://cdn.jsdelivr.net/npm/sql.js@${SQL_JS_VERSION}/dist`;
const DB_KEY = "ke-code-sql-db-v1";

const DEFAULT_SQL = `CREATE TABLE demo (id INTEGER, label TEXT);
INSERT INTO demo VALUES (1, 'alpha'), (2, 'beta');
SELECT * FROM demo;`;

function loadSqlJs(): Promise<SqlJsStatic> {
  if (typeof window === "undefined") return Promise.reject(new Error("No window"));
  const boot = async () => {
    if (!window.initSqlJs) {
      await new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>("script[data-ke-sqljs]");
        if (existing) {
          existing.addEventListener("load", () => resolve());
          existing.addEventListener("error", () => reject(new Error("Failed to load sql.js")));
          return;
        }
        const script = document.createElement("script");
        script.src = `${SQL_CDN}/sql-wasm.js`;
        script.async = true;
        script.dataset.keSqljs = "1";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load sql.js from CDN"));
        document.head.appendChild(script);
      });
    }
    if (!window.initSqlJs) throw new Error("sql.js loader missing");
    return window.initSqlJs({
      locateFile: (file) => `${SQL_CDN}/${file}`,
    });
  };
  return boot();
}

function formatTables(tables: Array<{ columns: string[]; values: unknown[][] }>): string {
  if (!tables.length) return "(statement finished — no result rows)";
  return tables
    .map((table, index) => {
      const header = table.columns.join(" | ");
      const sep = table.columns.map((c) => "-".repeat(Math.max(3, c.length))).join("-+-");
      const rows = table.values.map((row) => row.map((cell) => String(cell)).join(" | "));
      return [`Result ${index + 1}`, header, sep, ...rows].join("\n");
    })
    .join("\n\n");
}

function persistDatabase(db: SqlJsDatabase) {
  try {
    const bytes = db.export();
    let binary = "";
    for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]!);
    localStorage.setItem(DB_KEY, btoa(binary));
  } catch {
    // ignore persistence errors
  }
}

function loadDatabaseBytes(): Uint8Array | null {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) return null;
    const binary = atob(raw);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return bytes;
  } catch {
    return null;
  }
}

export default function SqlPlayground({
  examples,
  storageKey = "ke-code-sql-draft",
}: Props) {
  const starter = examples[0]?.code || DEFAULT_SQL;
  const [code, setCode] = useState(starter);
  const [output, setOutput] = useState(
    "Ready. Press Run — SQL runs against a persistent in-memory DB (saved in this browser)."
  );
  const [selected, setSelected] = useState(examples[0]?.id || "default");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "running" | "error">("idle");
  const sqlRef = useRef<SqlJsStatic | null>(null);
  const dbRef = useRef<SqlJsDatabase | null>(null);

  usePlaygroundHandoffNotice((msg) => setNote(msg));

  usePlaygroundShortcuts({
    onRun: () => void run(),
    onCopy: () => {
      void copySource(code).then((ok) => setNote(ok ? "Source copied." : "Copy failed."));
    },
  });

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setCode(stored);
      setSelected("draft");
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, code);
  }, [code, storageKey]);

  const exampleOptions = useMemo(
    () => [{ id: "draft", title: "Your draft" }, ...examples],
    [examples]
  );

  async function ensureSql() {
    if (sqlRef.current) return sqlRef.current;
    setStatus("loading");
    const SQL = await loadSqlJs();
    sqlRef.current = SQL;
    setStatus("idle");
    return SQL;
  }

  async function ensureDb(SQL: SqlJsStatic): Promise<SqlJsDatabase> {
    if (dbRef.current) return dbRef.current;
    const bytes = loadDatabaseBytes();
    dbRef.current = bytes ? new SQL.Database(bytes) : new SQL.Database();
    return dbRef.current;
  }

  async function run() {
    setNote("");
    try {
      const SQL = await ensureSql();
      const db = await ensureDb(SQL);
      setStatus("running");
      const tables = db.exec(code);
      setOutput(formatTables(tables));
      persistDatabase(db);
      setNote("Query finished — database state kept for the next Run.");
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setOutput(String(err));
      setNote("SQL error.");
    }
  }

  function resetDatabase() {
    dbRef.current?.close();
    dbRef.current = null;
    localStorage.removeItem(DB_KEY);
    setOutput("Database reset. Next Run starts with an empty SQLite file.");
    setNote("Database cleared.");
    setStatus("idle");
  }

  function loadExample(id: string) {
    setSelected(id);
    if (id === "draft") return;
    const found = examples.find((item) => item.id === id);
    if (!found) return;
    setCode(found.code);
    setNote(`Loaded “${found.title}”.`);
  }

  function resetStarter() {
    setCode(starter);
    setSelected(examples[0]?.id || "default");
    setOutput("Editor reset to starter SQL (database unchanged).");
    setNote("Reset editor text only.");
    setStatus(sqlRef.current ? "idle" : "idle");
  }

  return (
    <section className="card space-y-4">
      <CodeLangOfficialStrip langId="sql" compact />
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Online editor
          </p>
          <h2 className="text-xl font-bold">SQL playground</h2>
          <p className="mt-1 text-sm text-slate-600">
            SQLite via sql.js — CREATE / INSERT / SELECT against a session database that persists in
            this browser until you reset it. Draft SQL auto-saves separately.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <label className="text-sm font-medium text-slate-600">
            Example
            <select
              className="input mt-1 min-w-[10rem]"
              value={selected}
              onChange={(event) => loadExample(event.target.value)}
            >
              {exampleOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="btn-secondary self-end" onClick={resetStarter}>
            Reset editor
          </button>
          <button type="button" className="btn-secondary self-end" onClick={resetDatabase}>
            Reset database
          </button>
          <PlaygroundExtras code={code} language="sql" filename="playground.sql" onNote={setNote} />
          <button
            type="button"
            className="btn-primary self-end"
            onClick={() => void run()}
            disabled={status === "loading" || status === "running"}
          >
            {status === "loading" ? "Loading SQL…" : status === "running" ? "Running…" : "Run"}
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block min-w-0 text-sm font-medium">
          SQL
          <textarea
            className="textarea mt-2 min-h-[22rem] font-mono text-xs leading-relaxed"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setSelected("draft");
              setNote("");
            }}
            spellCheck={false}
            aria-label="SQL source editor"
          />
        </label>
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium">Result</p>
            <span className="text-xs text-slate-500">
              {status === "loading" && "loading runtime"}
              {status === "running" && "running"}
              {status === "error" && "error"}
              {status === "idle" && "ready"}
            </span>
          </div>
          <pre className="mt-2 h-[22rem] overflow-auto rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-100 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div>
      {note ? (
        <p className={`text-xs ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>
          {note}
        </p>
      ) : null}
    </section>
  );
}
