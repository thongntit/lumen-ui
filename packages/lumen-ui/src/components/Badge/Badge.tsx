import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./Badge.css";

export type BadgeTone =
  | "new"
  | "soon"
  | "live"
  | "beta"
  | "muted"
  | "solid";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  dot?: boolean;
  children?: ReactNode;
};

export function Badge({
  tone = "muted",
  dot = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span className={cx("lm-badge", `lm-badge--${tone}`, className)} {...rest}>
      {dot ? <span className="lm-badge__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
