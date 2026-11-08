"use client";

import { useState, type FormEvent } from "react";

interface ContactFormProps {
  topics: string[];
}

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm({ topics }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topics[0] ?? "Something else",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again, or email me directly.");
    }
  }

  const fieldClasses =
    "rounded-xl border-[1.5px] border-line bg-surface px-4 py-3.5 text-base text-ink outline-none focus:border-accent";

  if (status === "done") {
    return (
      <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-3 rounded-[28px] border border-line bg-surface p-9">
        <h3 className="m-0 font-display text-2xl">Message received</h3>
        <p className="m-0 text-body">
          Thanks. I'll read it and get back to you at the email you gave.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid min-w-0 flex-[999_1_520px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 rounded-[28px] border border-line bg-surface p-9"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="c-name" className="text-sm font-semibold">
          Your name
        </label>
        <input
          id="c-name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="c-email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <label htmlFor="c-topic" className="text-sm font-semibold">
          What&apos;s it about?
        </label>
        <select
          id="c-topic"
          value={form.topic}
          onChange={(e) => update("topic", e.target.value)}
          className={`${fieldClasses} appearance-none`}
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <label htmlFor="c-msg" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="c-msg"
          rows={6}
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${fieldClasses} resize-y`}
        />
      </div>

      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="c-website">Leave this field empty</label>
        <input
          id="c-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="col-span-full flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-muted">
          I&apos;ll only use your email to reply.
        </span>
        <div className="flex items-center gap-4">
          {status === "error" && (
            <span className="text-sm text-accent" role="alert">
              {error}
            </span>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full border-none bg-accent px-7 py-3.5 text-base font-semibold text-white disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send it to the lab"}
          </button>
        </div>
      </div>
    </form>
  );
}
