import React from "react";

import "@/components/button/button.css";

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  href: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button = (props: ButtonProps) => {
  const mode = props.primary ? "button--primary" : "button--secondary";
  return (
    <a
      href={props.href}
      className={`button button--${props.size} ${mode} ${props.className ? props.className : "classNone"}`}
      style={{
        display: "inline-block",
        cursor: "pointer",
        border: "0",
        borderRadius: "0.5rem",
        fontWeight: "500",
        lineHeight: "1",
        fontFamily: "'Noto Sans JP', Helvetica, Arial, sans-serif",
        width: "fit-content",
        backgroundColor: props.primary ? "var(--color-theme)": "transparent",
        boxShadow: props.primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
        color: props.primary ? "var(--background)" : "#333",
        padding: props.size === "small" ? "0.625rem 1rem" : props.size === "medium" ? "0.6825rem 1.25rem" : "0.75rem 1.5rem",
        fontSize: props.size === "small" ? "0.75rem" : props.size === "medium" ? "0.875rem" : "1rem",
        ...props.style
      }}
    >
      {props.label && props.label}
      {props.children && props.children}
    </a >
  );
};
