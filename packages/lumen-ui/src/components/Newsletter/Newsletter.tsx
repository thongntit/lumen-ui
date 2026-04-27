"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { cx } from "../../lib/cx";
import "./Newsletter.css";

export type NewsletterProps = {
  placeholder?: string;
  buttonLabel?: ReactNode;
  thanksMessage?: ReactNode;
  /** Async submission handler. Resolves on success. Rejects to show input again. */
  onSubmit?: (email: string) => Promise<void> | void;
  className?: string;
  "aria-label"?: string;
};

export function Newsletter({
  placeholder = "you@studio.com",
  buttonLabel = "Subscribe →",
  thanksMessage = "Thanks.",
  onSubmit,
  className,
  "aria-label": ariaLabel = "Subscribe to the newsletter",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state !== "idle" || !email) return;
    setState("submitting");
    try {
      await onSubmit?.(email);
      setState("done");
    } catch {
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div className={cx("lm-newsletter", "lm-newsletter--done", className)}>
        <span className="lm-newsletter__thanks">{thanksMessage}</span>
      </div>
    );
  }

  return (
    <form
      className={cx("lm-newsletter", className)}
      onSubmit={handleSubmit}
      aria-label={ariaLabel}
    >
      <input
        type="email"
        required
        autoComplete="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === "submitting"}
      />
      <button
        type="submit"
        className="lm-newsletter__send"
        disabled={state === "submitting"}
      >
        {buttonLabel}
      </button>
    </form>
  );
}
