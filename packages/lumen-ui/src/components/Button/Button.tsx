import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../../lib/cx";
import "./Button.css";

export type ButtonVariant =
  | "primary"
  | "accent"
  | "secondary"
  | "ghost"
  | "link";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  squared?: boolean;
  iconOnly?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export type ButtonProps =
  | (CommonProps &
      ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export const Button = forwardRef<HTMLElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      squared = false,
      iconOnly = false,
      leadingIcon,
      trailingIcon,
      children,
      className,
      ...rest
    } = props;

    const cls = cx(
      "lm-btn",
      `lm-btn--${variant}`,
      `lm-btn--${size}`,
      squared && "lm-btn--squared",
      iconOnly && "lm-btn--icon-only",
      className,
    );

    const content = (
      <>
        {leadingIcon ? (
          <span className="lm-btn__icon" aria-hidden="true">
            {leadingIcon}
          </span>
        ) : null}
        {children ? <span className="lm-btn__label">{children}</span> : null}
        {trailingIcon ? (
          <span className="lm-btn__icon" aria-hidden="true">
            {trailingIcon}
          </span>
        ) : null}
      </>
    );

    if ("href" in rest && rest.href !== undefined) {
      const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cls}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonProps.type ?? "button"}
        className={cls}
        {...buttonProps}
      >
        {content}
      </button>
    );
  },
);
