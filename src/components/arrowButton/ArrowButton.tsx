import React from "react";

import "./arrowButton.css";
import Link from "next/link";

import ArrowForwardIcon from "@/components/svg/arrow_forward_24dp_000000_FILL0_wght300_GRAD0_opsz24";

export interface ButtonProps {
    href: string;
    label: string;
}

export const ArrowButton = ({
  href,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Link 
      className='arrowButton' 
      href={href}
      {...props}
    >
      <div className='arrowButton__icon'>
        <ArrowForwardIcon color='none' />
      </div>
      <span className='arrowButton__label'>{label}</span>
    </Link>
  );
};
