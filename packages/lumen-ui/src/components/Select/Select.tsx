import { forwardRef, type SelectHTMLAttributes } from "react";
import { cx } from "../../lib/cx.js";
import "../Input/Input.css";
import "./Select.css";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ invalid, className, children, ...rest }, ref) {
    return (
      <select
        ref={ref}
        className={cx(
          "lm-input",
          "lm-select",
          invalid && "lm-input--error",
          className,
        )}
        aria-invalid={invalid || undefined}
        {...rest}
      >
        {children}
      </select>
    );
  },
);
