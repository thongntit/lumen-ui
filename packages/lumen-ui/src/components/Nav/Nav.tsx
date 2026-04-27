"use client";

import { useState, type ReactNode } from "react";
import { cx } from "../../lib/cx";
import "./Nav.css";

export type NavLink = {
  label: ReactNode;
  href: string;
};

export type NavProps = {
  brand?: ReactNode;
  links?: NavLink[];
  actions?: ReactNode;
  sticky?: boolean;
  className?: string;
  "aria-label"?: string;
};

export function Nav({
  brand,
  links = [],
  actions,
  sticky = true,
  className,
  "aria-label": ariaLabel = "Primary",
}: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cx("lm-nav", sticky && "lm-nav--sticky", className)}
      aria-label={ariaLabel}
    >
      <div className="lm-nav__inner">
        {brand ? <div className="lm-nav__brand">{brand}</div> : null}
        {links.length > 0 ? (
          <ul className="lm-nav__links" id="lm-nav-links">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        ) : null}
        {actions ? <div className="lm-nav__actions">{actions}</div> : null}
        {links.length > 0 ? (
          <button
            type="button"
            className="lm-nav__toggle"
            aria-controls="lm-nav-links"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={cx("lm-nav__hamburger", open && "is-open")} />
          </button>
        ) : null}
      </div>
      {open ? (
        <div className="lm-nav__sheet">
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {actions ? <div className="lm-nav__sheet-actions">{actions}</div> : null}
        </div>
      ) : null}
    </nav>
  );
}
