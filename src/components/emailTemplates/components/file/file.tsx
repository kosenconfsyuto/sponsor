import React from "react";

import "./file.css";
import "@/app/global.css";

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
    <a className={`fileComp ${props.className}`} href={props.href} style={{
      width: "fit-content",
      height: "fit-content",
      display: "block",
    }}>
      <div className='fileComp-child' style={{
        width: "10rem",
        borderRadius: "0.25rem",
        border: "var(--border-thin-color) 2px solid",
        overflow: "hidden",
      }}>
        <div className='fileComp__thumbnail-par'>
          <img
            src={props.thumbnailSrc} alt={props.thumbnailAlt ? props.thumbnailAlt : "ファイルのサムネイル"}
            width={props.thumbnailWidth} height={props.thumbnailHeight}
            className='fileComp__thumbnail'
          />
        </div>
        <div className='fileComp__description-par' style={{
          width: "fit-content",
          minWidth: "100%",
          padding: "0.25rem",
          background: "var(--border-thin-color)"
        }}>
          <span className='fileComp__description' style={{
            textAlign: "center",
            minWidth: "100%",
            display: "block",
          }}>{props.description}</span>
        </div>
      </div>
    </a>
  );
};