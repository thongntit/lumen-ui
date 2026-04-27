import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx";
import "./Card.css";

export type CardVariant = "default" | "dark" | "pull";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  interactive?: boolean;
  children?: ReactNode;
};

export function Card({
  variant = "default",
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        "lm-card",
        `lm-card--${variant}`,
        interactive && "lm-card--interactive",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
