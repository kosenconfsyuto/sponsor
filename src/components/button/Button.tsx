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
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const mode = props.primary ? "button--primary" : "button--secondary";
  if (!props.href) {
    return (
      <button
        type="button"
        className={["button", `button--${props.size}`, mode].join(" ")}
        {...props}
      >
        {props.label && props.label}
        {props.children && props.children}
        <style jsx>{`
        button {
          background-color: ${props.backgroundColor};
        }
      `}</style>
      </button>
    );} else {
    return (
      <Link
        href={props.href}
        className={`button button--${props.size} ${mode} ${props.className ? props.className: "classNone"}`}
        {...props}
      >
        {props.label && props.label}
        {props.children && props.children}
        <style jsx>{`
          a {
            background-color: ${props.backgroundColor};
          }
        `}</style>
      </Link>
    );
  }
};
