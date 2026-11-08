"use client";

import { useState, type FormEvent } from "react";

interface NotifyFormProps {
  /** Stable per-product key, kept separate per product on the server. */
  productKey: string;
  label: string;
  /** Affects input/label colours so it reads on light, dark or game panels. */
  tone?: "light" | "dark" | "game";
}

type Status = "idle" | "sending" | "done" | "error";

export default function NotifyForm({
  productKey,
  label,
  tone = "light",
}: NotifyFormProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const labelColor =
    tone === "dark" ? "text-bg" : "text-ink";
  const inputClasses =
    tone === "dark"
      ? "border-dark-line bg-dark-surface text-bg placeholder:text-dark-muted-2"
      : tone === "game"
        ? "border-ink bg-[#FFF8E6] text-ink placeholder:text-muted"
        : "border-line bg-surface text-ink placeholder:text-muted";
  const noteColor = tone === "dark" ? "text-dark-muted-2" : "text-muted";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: productKey, website }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p className={`text-[15px] font-medium ${labelColor}`}>
        Thanks. I'll email you at that address when it's out.
      </p>
    );
  }

  const inputId = `notify-${productKey}`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2"
      noValidate
    >
      <div className="flex flex-wrap items-end gap-2.5">
        <div className="flex min-w-0 flex-[1_1_240px] flex-col gap-1.5">
          <label
            htmlFor={inputId}
            className={`text-sm font-semibold ${labelColor}`}
          >
            {label}
          </label>
          <input
            id={inputId}
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`rounded-xl border-[1.5px] px-3.5 py-3 text-[15px] outline-none focus:border-accent ${inputClasses}`}
          />
        </div>
        {/* Honeypot: hidden from people, tempting to bots. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={`${inputId}-website`}>Leave this field empty</label>
          <input
            id={`${inputId}-website`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl border-none bg-ink px-5 py-3 text-[15px] font-semibold text-bg disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Notify me"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-accent" role="alert">
          {message}
        </p>
      )}
      <p className={`text-xs ${noteColor}`}>
        One email when it's out, nothing else.
      </p>
    </form>
  );
}
