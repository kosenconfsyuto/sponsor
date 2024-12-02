"use client";

import React from "react";
import Link from "next/link";

import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  href,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  if (!href) {
    return (
      <button
        type="button"
        className={["button", `button--${size}`, mode].join(" ")}
        {...props}
      >
        {label && label}
        {children && children}
        <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
      </button>
    );} else {
    return (
      <Link
        href={href}
        className={["button", `button--${size}`, mode].join(" ")}
        {...props}
      >
        {label && label}
        {children && children}
        <style jsx>{`
          a {
            background-color: ${backgroundColor};
          }
        `}</style>
      </Link>
    );
  }
};
