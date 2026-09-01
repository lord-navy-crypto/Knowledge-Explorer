"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLocalAI } from "@/components/LocalAIProvider";
import { useTaskMonitor } from "@/components/TaskMonitorProvider";

function sourceForPath(pathname: string) {
  if (pathname.startsWith("/easy-local-ai")) return "Easy Local AI";
  if (pathname.startsWith("/english")) return "AI for English";
  if (pathname.startsWith("/code")) return "AI for Code";
  if (pathname.startsWith("/ai-for-ap") || pathname.startsWith("/ap") || pathname.startsWith("/hints")) return "AI for AP";
  if (pathname.startsWith("/user-guide")) return "AI Guide";
  return "Local AI";
}

function shortModel(modelId: string) {
  return modelId
    .replace(/-q\w+(?:_\d+)?-MLC$/i, "")
    .replace(/-MLC$/i, "")
    .replaceAll("-", " ");
}

export default function LocalAITaskBridge() {
  const pathname = usePathname();
  const localAI = useLocalAI();
  const { startTask, updateTask, finishTask, failTask } = useTaskMonitor();
  const taskIdRef = useRef<string>("");
  const previousStatusRef = useRef(localAI.status);
  const generationTickRef = useRef(0);

  useEffect(() => {
    const source = sourceForPath(pathname || "");
    const previous = previousStatusRef.current;
    const status = localAI.status;

    if (status === "loading") {
      if (!taskIdRef.current || previous !== "loading") {
        taskIdRef.current = startTask({
          title: `Load ${shortModel(localAI.selectedModelId)}`,
          detail: localAI.statusText,
          source,
          progress: Math.max(2, localAI.progress * 100),
        });
      } else {
        updateTask(taskIdRef.current, {
          title: `Load ${shortModel(localAI.selectedModelId)}`,
          detail: localAI.statusText,
          source,
          progress: Math.max(2, localAI.progress * 100),
          status: "running",
        });
      }
    } else if (status === "generating") {
      if (!taskIdRef.current || previous !== "generating") {
        generationTickRef.current = 12;
        taskIdRef.current = startTask({
          title: `Generate with ${shortModel(localAI.loadedModelId || localAI.selectedModelId)}`,
          detail: localAI.statusText || "Preparing Local AI response…",
          source,
          progress: generationTickRef.current,
        });
      } else {
        generationTickRef.current = Math.min(94, generationTickRef.current + 3);
        updateTask(taskIdRef.current, {
          detail: localAI.statusText,
          source,
          progress: generationTickRef.current,
          status: "running",
        });
      }
    } else if (status === "ready") {
      if (taskIdRef.current && (previous === "loading" || previous === "generating")) {
        finishTask(
          taskIdRef.current,
          previous === "loading" ? "Model ready in browser." : "Local AI response complete."
        );
        taskIdRef.current = "";
      }
    } else if (status === "error") {
      if (taskIdRef.current) {
        failTask(taskIdRef.current, localAI.error || localAI.statusText || "Local AI task failed.");
        taskIdRef.current = "";
      }
    } else if (status === "idle" && taskIdRef.current) {
      finishTask(taskIdRef.current, "Task stopped.");
      taskIdRef.current = "";
    }

    previousStatusRef.current = status;
  }, [
    failTask,
    finishTask,
    localAI.error,
    localAI.loadedModelId,
    localAI.progress,
    localAI.selectedModelId,
    localAI.status,
    localAI.statusText,
    pathname,
    startTask,
    updateTask,
  ]);

  return null;
}
