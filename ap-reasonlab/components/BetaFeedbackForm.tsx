"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  readForumDisplayName,
  writeForumDisplayName,
} from "@/lib/forum-display-name";

export default function BetaFeedbackForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = readForumDisplayName();
    if (saved) setName(saved);
  }, []);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const author = name.trim();
    const title = topic.trim();
    const body = message.trim();
    if (author.length < 2) {
      setError("Display name must be at least 2 characters.");
      return;
    }
    if (!title || !body) {
      setError("Topic and message are required.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_forum_post",
          item: {
            author,
            title: `[Beta feedback] ${title}`,
            body: `#beta-feedback\n\n${body}\n\n— submitted from Knowledge Explorer beta form`,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not submit feedback");
      writeForumDisplayName(author);
      setStatus("sent");
      setTopic("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submit failed");
    }
  }

  if (status === "sent") {
    return (
      <section className="card space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Thanks for the feedback</h2>
        <p className="text-sm text-slate-600">
          Your note was posted to the Forum with the <strong>#beta-feedback</strong> tag. Editors
          and other students can reply there.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/forum?tag=beta-feedback" className="btn-primary">
            View beta feedback threads
          </Link>
          <button type="button" className="btn-secondary" onClick={() => setStatus("idle")}>
            Send another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="card space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Beta tester feedback</h2>
        <p className="mt-1 text-sm text-slate-600">
          Share bugs, UX ideas, or content requests. Posts go to the Forum tagged{" "}
          <strong>#beta-feedback</strong>.{" "}
          <Link href="/forum?tag=beta-feedback" className="font-medium text-brand-700 hover:underline">
            Browse existing feedback
          </Link>
        </p>
      </div>
      <form className="space-y-3" onSubmit={submit}>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Display name</span>
          <input
            className="input mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (2–40 characters)"
            maxLength={40}
            required
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Topic</span>
          <input
            className="input mt-1"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Search, TOEFL bank, AI Toolbox"
            maxLength={120}
            required
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Message</span>
          <textarea
            className="input mt-1 min-h-[120px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What worked? What was confusing?"
            maxLength={8000}
            required
          />
        </label>
        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Post to Forum"}
        </button>
      </form>
    </section>
  );
}
