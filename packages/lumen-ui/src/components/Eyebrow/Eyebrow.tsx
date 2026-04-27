import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./Eyebrow.css";

export type EyebrowProps = HTMLAttributes<HTMLSpanElement> & {
  accent?: boolean;
  children?: ReactNode;
};

export function Eyebrow({
  accent = false,
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <span
      className={cx("lm-eyebrow-c", accent && "lm-eyebrow-c--accent", className)}
      {...rest}
    >
      {children}
    </span>
  );
}
