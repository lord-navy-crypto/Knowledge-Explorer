"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type TaskStatus = "queued" | "running" | "success" | "error" | "stalled";

export type AppTask = {
  id: string;
  title: string;
  detail?: string;
  source?: string;
  status: TaskStatus;
  progress: number;
  startedAt: number;
  updatedAt: number;
  finishedAt?: number;
  error?: string;
};

type StartTaskInput = {
  title: string;
  detail?: string;
  source?: string;
  progress?: number;
};

type TaskMonitorValue = {
  tasks: AppTask[];
  activeCount: number;
  startTask: (input: StartTaskInput) => string;
  updateTask: (id: string, patch: Partial<Pick<AppTask, "title" | "detail" | "source" | "progress" | "status">>) => void;
  finishTask: (id: string, detail?: string) => void;
  failTask: (id: string, error: string) => void;
  dismissTask: (id: string) => void;
  clearFinished: () => void;
};

const TaskMonitorContext = createContext<TaskMonitorValue | null>(null);
const STALL_MS = 30_000;
const FINISHED_TTL_MS = 90_000;

function clampProgress(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function makeId() {
  return `task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function TaskMonitorProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<AppTask[]>([]);

  const startTask = useCallback((input: StartTaskInput) => {
    const now = Date.now();
    const id = makeId();
    const task: AppTask = {
      id,
      title: input.title,
      detail: input.detail,
      source: input.source,
      status: "running",
      progress: clampProgress(input.progress ?? 2),
      startedAt: now,
      updatedAt: now,
    };
    setTasks((current) => [task, ...current].slice(0, 12));
    return id;
  }, []);

  const updateTask = useCallback<TaskMonitorValue["updateTask"]>((id, patch) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              ...patch,
              progress: patch.progress === undefined ? task.progress : clampProgress(patch.progress),
              updatedAt: Date.now(),
            }
          : task
      )
    );
  }, []);

  const finishTask = useCallback((id: string, detail?: string) => {
    const now = Date.now();
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              detail: detail ?? task.detail,
              status: "success",
              progress: 100,
              updatedAt: now,
              finishedAt: now,
            }
          : task
      )
    );
  }, []);

  const failTask = useCallback((id: string, error: string) => {
    const now = Date.now();
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "error",
              error,
              detail: error,
              updatedAt: now,
              finishedAt: now,
            }
          : task
      )
    );
  }, []);

  const dismissTask = useCallback((id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  }, []);

  const clearFinished = useCallback(() => {
    setTasks((current) =>
      current.filter(
        (task) => task.status === "running" || task.status === "queued" || task.status === "stalled"
      )
    );
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const now = Date.now();
      setTasks((current) =>
        current
          .filter((task) => !task.finishedAt || now - task.finishedAt < FINISHED_TTL_MS)
          .map((task) => {
            if (task.status === "running" && now - task.updatedAt > STALL_MS) {
              return {
                ...task,
                status: "stalled" as const,
                detail: task.detail || "No progress update for 30 seconds. The task may still be running.",
              };
            }
            return task;
          })
      );
    }, 1_000);
    return () => window.clearInterval(timer);
  }, []);

  const value = useMemo<TaskMonitorValue>(() => ({
    tasks,
    activeCount: tasks.filter(
      (task) => task.status === "running" || task.status === "queued" || task.status === "stalled"
    ).length,
    startTask,
    updateTask,
    finishTask,
    failTask,
    dismissTask,
    clearFinished,
  }), [clearFinished, dismissTask, failTask, finishTask, startTask, tasks, updateTask]);

  return <TaskMonitorContext.Provider value={value}>{children}</TaskMonitorContext.Provider>;
}

export function useTaskMonitor() {
  const value = useContext(TaskMonitorContext);
  if (!value) throw new Error("useTaskMonitor must be used inside TaskMonitorProvider");
  return value;
}
