import React from "react";

import "./file.css";
import "@/app/global.css";

import {
  Container,
  Img,
  Link,
  Text,
} from "@react-email/components";

interface FileProps {
  thumbnailSrc: string;
  thumbnailAlt?: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  className?: string;
  href: string;
  description: string;
}

export const File = (props: FileProps) => {
  return (
    <Link href={props.href} style={{
      width: "fit-content",
      height: "fit-content",
      display: "block",
    }}>
      <Container style={{
        width: "10rem",
        borderRadius: "0.25rem",
        border: "var(--border-thin-color) 2px solid",
        overflow: "hidden",
      }}>
        <Container>
          <Img
            src={props.thumbnailSrc} alt={props.thumbnailAlt ? props.thumbnailAlt : "ファイルのサムネイル"}
            width={props.thumbnailWidth} height={props.thumbnailHeight}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maxWidth: "5rem"
            }}
          />
        </Container>
        <Container style={{
          width: "fit-content",
          minWidth: "100%",
          padding: "0.25rem",
          background: "var(--border-thin-color)"
        }}>
          <Text style={{
            textAlign: "center",
            minWidth: "100%",
            display: "block",
          }}>{props.description}</Text>
        </Container>
      </Container>
    </Link>
  );
};