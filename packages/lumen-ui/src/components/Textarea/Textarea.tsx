import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cx } from "../../lib/cx";
import "../Input/Input.css";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
  success?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ invalid, success, className, rows = 4, ...rest }, ref) {
    const cls = cx(
      "lm-input",
      invalid && "lm-input--error",
      success && "lm-input--success",
      className,
    );
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cls}
        aria-invalid={invalid || undefined}
        {...rest}
      />
    );
  },
);
