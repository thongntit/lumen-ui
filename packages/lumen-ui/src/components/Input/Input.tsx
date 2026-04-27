import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../../lib/cx.js";
import "./Input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  success?: boolean;
  leadingIcon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ invalid, success, leadingIcon, className, ...rest }, ref) {
    const cls = cx(
      "lm-input",
      invalid && "lm-input--error",
      success && "lm-input--success",
      Boolean(leadingIcon) && "lm-input--with-icon",
      className,
    );
    if (leadingIcon) {
      return (
        <span className="lm-input-wrap">
          <span className="lm-input-wrap__icon" aria-hidden="true">
            {leadingIcon}
          </span>
          <input
            ref={ref}
            className={cls}
            aria-invalid={invalid || undefined}
            {...rest}
          />
        </span>
      );
    }
    return (
      <input
        ref={ref}
        className={cls}
        aria-invalid={invalid || undefined}
        {...rest}
      />
    );
  },
);
