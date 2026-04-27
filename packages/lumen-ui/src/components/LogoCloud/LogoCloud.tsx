import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import "./LogoCloud.css";

export type LogoCloudProps = {
  label?: ReactNode;
  logos: ReactNode[];
  className?: string;
};

export function LogoCloud({ label, logos, className }: LogoCloudProps) {
  return (
    <div className={cx("lm-logocloud", className)}>
      {label ? <span className="lm-logocloud__label">{label}</span> : null}
      <ul className="lm-logocloud__row">
        {logos.map((logo, i) => (
          <li key={i} className="lm-logocloud__item">
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}
