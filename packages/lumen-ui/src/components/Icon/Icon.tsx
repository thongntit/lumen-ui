import type { ComponentType, SVGProps } from "react";
import { cx } from "../../lib/cx";
import "./Icon.css";

export type IconSize = 16 | 20 | 24 | 32;

export type IconProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  size?: IconSize;
  tone?: "default" | "accent" | "muted" | "inverse";
  className?: string;
  "aria-label"?: string;
};

export function Icon({
  icon: Component,
  size = 20,
  tone = "default",
  className,
  "aria-label": ariaLabel,
}: IconProps) {
  return (
    <Component
      className={cx("lm-icon", `lm-icon--${tone}`, className)}
      width={size}
      height={size}
      strokeWidth={1.5}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    />
  );
}
