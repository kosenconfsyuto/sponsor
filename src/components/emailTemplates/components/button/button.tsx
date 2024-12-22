import React from "react";

import "@/components/button/button.css";

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const mode = props.primary ? "button--primary" : "button--secondary";
  return (
    <a
      href={props.href}
      className={`button button--${props.size} ${mode} ${props.className ? props.className : "classNone"}`}
    >
      {props.label && props.label}
      {props.children && props.children}
    </a>
  );
};
