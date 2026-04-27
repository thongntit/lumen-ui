import type { ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./Testimonial.css";

export type TestimonialProps = {
  badge?: ReactNode;
  quote: ReactNode;
  attribution?: ReactNode;
  role?: ReactNode;
  className?: string;
};

export function Testimonial({
  badge,
  quote,
  attribution,
  role,
  className,
}: TestimonialProps) {
  return (
    <figure className={cx("lm-testimonial", className)}>
      {badge ? <div className="lm-testimonial__badge">{badge}</div> : null}
      <blockquote className="lm-testimonial__quote">{quote}</blockquote>
      {(attribution || role) && (
        <figcaption className="lm-testimonial__cite">
          {attribution}
          {role ? (
            <>
              {attribution ? " · " : null}
              <span className="lm-testimonial__role">{role}</span>
            </>
          ) : null}
        </figcaption>
      )}
    </figure>
  );
}
