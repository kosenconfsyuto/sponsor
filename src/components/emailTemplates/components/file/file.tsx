import React from 'react';

import './file.css';
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
    <a className={`fileComp ${props.className}`} href={props.href}>
      <div className='fileComp-child'>
        <div className='fileComp__thumbnail-par'>
          <img
            src={props.thumbnailSrc} alt={props.thumbnailAlt ? props.thumbnailAlt : 'ファイルのサムネイル'}
            width={props.thumbnailWidth} height={props.thumbnailHeight}
            className='fileComp__thumbnail'
          />
        </div>
        <div className='fileComp__description-par'>
          <span className='fileComp__description'>{props.description}</span>
        </div>
      </div>
    </a>
  );
};