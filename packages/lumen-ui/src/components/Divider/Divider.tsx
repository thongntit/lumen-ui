import type { HTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "./Divider.css";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  spacing?: "tight" | "default" | "loose";
};

export function Divider({
  spacing = "default",
  className,
  ...rest
}: DividerProps) {
  return (
    <hr
      className={cx("lm-divider", `lm-divider--${spacing}`, className)}
      {...rest}
    />
  );
}
