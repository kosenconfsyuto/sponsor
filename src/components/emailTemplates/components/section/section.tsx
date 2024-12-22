import React from "react";

import "./section.css";
import "@/app/global.css";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Section = (props: SectionProps) => {
  return (
    <div className={`section ${props.className}`} style={props.style}>
      <h2 className='section__title'>{props.title}</h2>
      {props.description && <p className='section__description'>{props.description}</p>}
      <div className='section-child'>
        {props.children}
      </div>
    </div>
  );
};