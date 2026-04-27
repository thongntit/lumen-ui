import type { ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./FeatureGrid.css";

export type Feature = {
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  variant?: "default" | "dark" | "pull";
};

export type FeatureGridProps = {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  features: Feature[];
  columns?: 2 | 3;
  className?: string;
};

export function FeatureGrid({
  eyebrow,
  heading,
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  return (
    <div className={cx("lm-features", className)}>
      {(eyebrow || heading) && (
        <div className="lm-features__intro">
          {eyebrow ? <span className="lm-features__eyebrow">{eyebrow}</span> : null}
          {heading ? <h2 className="lm-features__heading">{heading}</h2> : null}
        </div>
      )}
      <ul
        className={cx("lm-features__grid", `lm-features__grid--${columns}`)}
      >
        {features.map((f, i) => (
          <li
            key={i}
            className={cx(
              "lm-features__item",
              f.variant && `lm-features__item--${f.variant}`,
            )}
          >
            {f.icon ? <span className="lm-features__icon">{f.icon}</span> : null}
            <h3 className="lm-features__title">{f.title}</h3>
            <p className="lm-features__desc">{f.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
