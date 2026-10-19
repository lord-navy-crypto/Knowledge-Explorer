export type Priority = "low" | "normal" | "high";
export type DeskTask = {
  id: string;
  title: string;
  done: boolean;
  priority: Priority;
  due: string;
};
export type DeskCard = {
  id: string;
  front: string;
  back: string;
};
export type WorkspaceData = {
  version: 2;
  tasks: DeskTask[];
  cards: DeskCard[];
  notes: string;
};

const STORAGE_KEY = "daily-desk.workspace.v2";
const LEGACY_TASKS_KEY = "daily-desk.tasks.v1";
const MAX_TASKS = 300;
const MAX_CARDS = 500;

export function emptyWorkspace(): WorkspaceData {
  return { version: 2, tasks: [], cards: [], notes: "" };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readPriority(value: unknown): Priority {
  return value === "low" || value === "high" ? value : "normal";
}

function readTask(value: unknown): DeskTask | null {
  if (!isRecord(value) || typeof value.title !== "string") return null;
  const title = value.title.trim().slice(0, 180);
  if (!title) return null;
  return {
    id: typeof value.id === "string" && value.id.length < 100 ? value.id : crypto.randomUUID(),
    title,
    done: value.done === true,
    priority: readPriority(value.priority),
    due: typeof value.due === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value.due) ? value.due : "",
  };
}

function readCard(value: unknown): DeskCard | null {
  if (!isRecord(value) || typeof value.front !== "string" || typeof value.back !== "string") return null;
  const front = value.front.trim().slice(0, 300);
  const back = value.back.trim().slice(0, 1200);
  if (!front || !back) return null;
  return {
    id: typeof value.id === "string" && value.id.length < 100 ? value.id : crypto.randomUUID(),
    front,
    back,
  };
}

export function parseWorkspace(raw: unknown): WorkspaceData {
  if (!isRecord(raw)) throw new Error("Invalid workspace: expected an object.");
  const tasks: DeskTask[] = [];
  const cards: DeskCard[] = [];
  if (Array.isArray(raw.tasks)) {
    for (const item of raw.tasks.slice(0, MAX_TASKS)) {
      const task = readTask(item);
      if (task) tasks.push(task);
    }
  }
  if (Array.isArray(raw.cards)) {
    for (const item of raw.cards.slice(0, MAX_CARDS)) {
      const card = readCard(item);
      if (card) cards.push(card);
    }
  }
  return {
    version: 2,
    tasks,
    cards,
    notes: typeof raw.notes === "string" ? raw.notes.slice(0, 50000) : "",
  };
}

export function readWorkspace(): WorkspaceData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return parseWorkspace(JSON.parse(stored) as unknown);
    const legacy = localStorage.getItem(LEGACY_TASKS_KEY);
    if (legacy) return parseWorkspace({ tasks: JSON.parse(legacy) as unknown, cards: [], notes: "" });
  } catch {
    // A corrupt browser-storage record must never prevent the application from launching.
  }
  return emptyWorkspace();
}

export function saveWorkspace(value: WorkspaceData): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function downloadWorkspace(value: WorkspaceData): void {
  const blob = new Blob([JSON.stringify(value, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "daily-desk-backup.json";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
