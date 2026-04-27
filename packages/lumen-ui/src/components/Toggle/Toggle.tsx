import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../../lib/cx.js";
import "./Toggle.css";

export type ToggleProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "children"
> & {
  label?: ReactNode;
};

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  function Toggle({ label, className, ...rest }, ref) {
    return (
      <label className={cx("lm-toggle-wrap", className)}>
        <input ref={ref} type="checkbox" role="switch" {...rest} />
        <span className="lm-toggle" aria-hidden="true" />
        {label ? <span className="lm-toggle__label">{label}</span> : null}
      </label>
    );
  },
);
