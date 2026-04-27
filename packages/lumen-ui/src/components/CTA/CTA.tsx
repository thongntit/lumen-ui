import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import "./CTA.css";

export type CTAProps = {
  heading: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  surface?: "ink" | "paper";
  className?: string;
};

export function CTA({
  heading,
  description,
  actions,
  surface = "ink",
  className,
}: CTAProps) {
  return (
    <div className={cx("lm-cta", `lm-cta--${surface}`, className)}>
      <div className="lm-cta__inner">
        <div className="lm-cta__copy">
          <h3 className="lm-cta__heading">{heading}</h3>
          {description ? <p className="lm-cta__desc">{description}</p> : null}
        </div>
        {actions ? <div className="lm-cta__actions">{actions}</div> : null}
      </div>
    </div>
  );
}
