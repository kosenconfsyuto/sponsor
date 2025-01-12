import React from "react";

import "./section.css";
import "@/app/global.css";
import {
  Container,
  Text,
} from "@react-email/components";


interface SectionProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Section = (props: SectionProps) => {
  return (
    <Container className={`section ${props.className}`} style={{
      color: "var(--foreground)",
      width: "100%",
      ...props.style
    }}>
      <Text className='section__title' style={{
        width: "100%",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "1rem",
        marginBottom: "0.75rem"
      }}>{props.title}</Text>
      {props.description && <Text className='section__description' style={{
        width: "100%",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "0.75rem",
        marginBottom: "0.75rem",
      }}>{props.description}</Text>}
      <Container className='section-child'>
        {props.children}
      </Container>
    </Container>
  );
};