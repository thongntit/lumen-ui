import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import "./Pricing.css";

export type PricingTier = {
  name: ReactNode;
  price: ReactNode;
  cadence?: ReactNode;
  description?: ReactNode;
  features: ReactNode[];
  action: ReactNode;
  recommended?: boolean;
};

export type PricingProps = {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  tiers: PricingTier[];
  className?: string;
};

export function Pricing({
  eyebrow,
  heading,
  tiers,
  className,
}: PricingProps) {
  return (
    <div className={cx("lm-pricing", className)}>
      {(eyebrow || heading) && (
        <div className="lm-pricing__intro">
          {eyebrow ? <span className="lm-pricing__eyebrow">{eyebrow}</span> : null}
          {heading ? <h2 className="lm-pricing__heading">{heading}</h2> : null}
        </div>
      )}
      <ul className="lm-pricing__grid">
        {tiers.map((tier, i) => (
          <li
            key={i}
            className={cx(
              "lm-pricing__tier",
              tier.recommended && "lm-pricing__tier--recommended",
            )}
          >
            {tier.recommended ? (
              <span className="lm-pricing__flag">Recommended</span>
            ) : null}
            <h3 className="lm-pricing__name">{tier.name}</h3>
            <div className="lm-pricing__price">
              <span className="lm-pricing__amount">{tier.price}</span>
              {tier.cadence ? (
                <span className="lm-pricing__cadence">{tier.cadence}</span>
              ) : null}
            </div>
            {tier.description ? (
              <p className="lm-pricing__desc">{tier.description}</p>
            ) : null}
            <ul className="lm-pricing__features">
              {tier.features.map((feature, j) => (
                <li key={j}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8.5L6.5 12 13 4.5" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="lm-pricing__action">{tier.action}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
