import type { ReactNode } from "react";
import { cx } from "../../lib/cx.js";
import "./Field.css";

export type FieldProps = {
  label?: ReactNode;
  required?: boolean;
  help?: ReactNode;
  error?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function Field({
  label,
  required,
  help,
  error,
  className,
  children,
}: FieldProps) {
  return (
    <label className={cx("lm-field", className)}>
      {label ? (
        <span className="lm-field__label">
          {label}
          {required ? <span className="lm-field__req">*</span> : null}
        </span>
      ) : null}
      {children}
      {error ? (
        <span className="lm-field__error">{error}</span>
      ) : help ? (
        <span className="lm-field__help">{help}</span>
      ) : null}
    </label>
  );
}
