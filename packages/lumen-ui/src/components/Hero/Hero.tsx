import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import "./Hero.css";

export type HeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  glow?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  lede,
  actions,
  glow = true,
  align = "left",
  className,
}: HeroProps) {
  return (
    <section
      className={cx(
        "lm-hero",
        `lm-hero--${align}`,
        glow && "lm-hero--glow",
        className,
      )}
    >
      <div className="lm-hero__inner">
        {eyebrow ? <div className="lm-hero__eyebrow">{eyebrow}</div> : null}
        <h1 className="lm-hero__title">{title}</h1>
        {lede ? <p className="lm-hero__lede">{lede}</p> : null}
        {actions ? <div className="lm-hero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
