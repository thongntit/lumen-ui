import type { ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./Footer.css";

export type FooterLink = {
  label: ReactNode;
  href: string;
  target?: string;
  rel?: string;
};

export type FooterProps = {
  brand?: ReactNode;
  links?: FooterLink[];
  small?: ReactNode;
  className?: string;
};

export function Footer({ brand, links = [], small, className }: FooterProps) {
  return (
    <footer className={cx("lm-footer", className)}>
      <div className="lm-footer__inner">
        {brand ? <div className="lm-footer__brand">{brand}</div> : null}
        {links.length > 0 ? (
          <ul className="lm-footer__links">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} target={link.target} rel={link.rel}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        {small ? <span className="lm-footer__small">{small}</span> : null}
      </div>
    </footer>
  );
}
