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
    <div className={`section ${props.className}`} style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      color: "var(--foreground)",
      width: "100%",
      ...props.style
    }}>
      <h2 className='section__title' style={{
        width: "100%",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "1rem",
      }}>{props.title}</h2>
      {props.description && <p className='section__description' style={{
        width: "100%",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "0.75rem"
      }}>{props.description}</p>}
      <div className='section-child'>
        {props.children}
      </div>
    </div>
  );
};