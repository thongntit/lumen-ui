import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../../lib/cx";
import "./Checkbox.css";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "children"
> & {
  label?: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, className, ...rest }, ref) {
    return (
      <label className={cx("lm-checkbox", className)}>
        <input ref={ref} type="checkbox" {...rest} />
        <span className="lm-checkbox__box" aria-hidden="true">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8.5L6.5 12 13 4.5" />
          </svg>
        </span>
        {label ? <span className="lm-checkbox__label">{label}</span> : null}
      </label>
    );
  },
);
