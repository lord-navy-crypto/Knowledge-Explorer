"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

type DialogMode = "confirm" | "prompt" | "alert";

type DialogState = {
  mode: DialogMode;
  title: string;
  message?: string;
  defaultValue?: string;
  placeholder?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
};

type Resolver =
  | { kind: "confirm"; resolve: (value: boolean) => void }
  | { kind: "prompt"; resolve: (value: string | null) => void }
  | { kind: "alert"; resolve: () => void };

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function useSiteDialog() {
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<DialogState | null>(null);
  const [inputValue, setInputValue] = useState("");
  const resolverRef = useRef<Resolver | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setState(null);
    setInputValue("");
    resolverRef.current = null;
    const previous = previousFocusRef.current;
    previousFocusRef.current = null;
    window.requestAnimationFrame(() => previous?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const timer = window.setTimeout(() => {
      if (state?.mode === "prompt") inputRef.current?.focus();
      else panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [open, state?.mode]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        if (state?.mode === "confirm") finishConfirm(false);
        else if (state?.mode === "prompt") finishPrompt(null);
        else finishAlert();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const nodes = [...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (node) => !node.hasAttribute("disabled")
      );
      if (!nodes.length) return;
      const first = nodes[0]!;
      const last = nodes[nodes.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  const confirm = useCallback(
    (options: Omit<DialogState, "mode">) =>
      new Promise<boolean>((resolve) => {
        resolverRef.current = { kind: "confirm", resolve };
        setState({ mode: "confirm", ...options });
        setOpen(true);
      }),
    []
  );

  const prompt = useCallback(
    (options: Omit<DialogState, "mode">) =>
      new Promise<string | null>((resolve) => {
        resolverRef.current = { kind: "prompt", resolve };
        setInputValue(options.defaultValue || "");
        setState({ mode: "prompt", ...options });
        setOpen(true);
      }),
    []
  );

  const alert = useCallback(
    (options: Omit<DialogState, "mode">) =>
      new Promise<void>((resolve) => {
        resolverRef.current = { kind: "alert", resolve };
        setState({ mode: "alert", ...options });
        setOpen(true);
      }),
    []
  );

  function finishConfirm(value: boolean) {
    const resolver = resolverRef.current;
    close();
    if (resolver?.kind === "confirm") resolver.resolve(value);
  }

  function finishPrompt(value: string | null) {
    const resolver = resolverRef.current;
    close();
    if (resolver?.kind === "prompt") resolver.resolve(value);
  }

  function finishAlert() {
    const resolver = resolverRef.current;
    close();
    if (resolver?.kind === "alert") resolver.resolve();
  }

  const dialog =
    open && state ? (
      <div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 p-4"
        role="presentation"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            if (state.mode === "confirm") finishConfirm(false);
            else if (state.mode === "prompt") finishPrompt(null);
            else finishAlert();
          }
        }}
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        >
          <h2 id={titleId} className="text-xl font-semibold text-slate-900">
            {state.title}
          </h2>
          {state.message ? (
            <p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">{state.message}</p>
          ) : null}
          {state.mode === "prompt" ? (
            <input
              ref={inputRef}
              className="input mt-4"
              value={inputValue}
              placeholder={state.placeholder}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") finishPrompt(inputValue);
              }}
            />
          ) : null}
          <div className="mt-5 flex flex-wrap gap-2">
            {state.mode === "alert" ? (
              <button type="button" className="btn-primary" onClick={finishAlert}>
                {state.confirmLabel || "OK"}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className={state.danger ? "btn-primary bg-red-600 hover:bg-red-700" : "btn-primary"}
                  onClick={() => {
                    if (state.mode === "confirm") finishConfirm(true);
                    else finishPrompt(inputValue);
                  }}
                >
                  {state.confirmLabel || (state.mode === "prompt" ? "Save" : "Confirm")}
                </button>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => {
                    if (state.mode === "confirm") finishConfirm(false);
                    else finishPrompt(null);
                  }}
                >
                  {state.cancelLabel || "Cancel"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    ) : null;

  return { confirm, prompt, alert, dialog };
}
