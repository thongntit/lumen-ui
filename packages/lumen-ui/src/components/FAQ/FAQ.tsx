import type { ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./FAQ.css";

export type FAQItem = {
  question: ReactNode;
  answer: ReactNode;
  defaultOpen?: boolean;
};

export type FAQProps = {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  items: FAQItem[];
  className?: string;
};

export function FAQ({ eyebrow, heading, items, className }: FAQProps) {
  return (
    <div className={cx("lm-faq", className)}>
      {(eyebrow || heading) && (
        <div className="lm-faq__intro">
          {eyebrow ? <span className="lm-faq__eyebrow">{eyebrow}</span> : null}
          {heading ? <h2 className="lm-faq__heading">{heading}</h2> : null}
        </div>
      )}
      <ul className="lm-faq__list">
        {items.map((item, i) => (
          <li key={i}>
            <details className="lm-faq__item" open={item.defaultOpen}>
              <summary className="lm-faq__q">
                <span>{item.question}</span>
                <svg
                  className="lm-faq__chev"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </summary>
              <div className="lm-faq__a">{item.answer}</div>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
