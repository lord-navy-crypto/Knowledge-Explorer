/**
 * Persist AI Toolbox multi-chat threads in IndexedDB (per browser).
 */

const DB_NAME = "ke-ai-toolbox";
const STORE = "threads";
const DB_VERSION = 1;

export type StoredChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  meta?: string;
  createdAt: number;
};

export type AiChatThread = {
  id: string;
  title: string;
  category: "ap" | "english" | "coding";
  task: string;
  subject?: string;
  messages: StoredChatMessage[];
  updatedAt: number;
  createdAt: number;
};

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB unavailable"));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error("IDB open failed"));
  });
}

export async function listAiThreads(): Promise<AiChatThread[]> {
  try {
    const db = await openDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).getAll();
      req.onsuccess = () => {
        const rows = (req.result as AiChatThread[]) || [];
        rows.sort((a, b) => b.updatedAt - a.updatedAt);
        resolve(rows);
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    return [];
  }
}

export async function getAiThread(id: string): Promise<AiChatThread | null> {
  try {
    const db = await openDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(id);
      req.onsuccess = () => resolve((req.result as AiChatThread) || null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
}

export async function saveAiThread(thread: AiChatThread): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(thread);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    /* ignore quota */
  }
}

export async function deleteAiThread(id: string): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    /* ignore */
  }
}

export function newThreadId(): string {
  return `th-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function titleFromFirstMessage(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return "New chat";
  return clean.length > 42 ? `${clean.slice(0, 42)}…` : clean;
}

export function exportThreadMarkdown(thread: AiChatThread): string {
  const lines = [
    `# ${thread.title}`,
    ``,
    `- Category: ${thread.category}`,
    `- Task: ${thread.task}`,
    thread.subject ? `- Subject: ${thread.subject}` : "",
    ``,
  ].filter(Boolean);
  for (const msg of thread.messages) {
    lines.push(`## ${msg.role === "user" ? "You" : "Assistant"}`);
    if (msg.meta) lines.push(`_${msg.meta}_`);
    lines.push("");
    lines.push(msg.text);
    lines.push("");
  }
  return lines.join("\n");
}
