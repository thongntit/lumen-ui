import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx";
import "./Section.css";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  surface?: "paper" | "white" | "subtle" | "ink";
  children?: ReactNode;
};

export function Section({
  surface = "paper",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cx("lm-section", `lm-section--${surface}`, className)}
      {...rest}
    >
      {children}
    </section>
  );
}
