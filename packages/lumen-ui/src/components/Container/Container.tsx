import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./Container.css";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "content" | "bleed";
  children?: ReactNode;
};

export function Container({
  size = "content",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cx("lm-container", `lm-container--${size}`, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
