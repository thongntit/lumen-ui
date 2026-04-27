import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./Tag.css";

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children?: ReactNode;
};

export function Tag({ className, children, ...rest }: TagProps) {
  return (
    <span className={cx("lm-tag", className)} {...rest}>
      {children}
    </span>
  );
}
