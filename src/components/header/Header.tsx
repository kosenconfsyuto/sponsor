import Image from "next/image";
import React from "react";
import "./header.css";

export const Header = () => (
  <header>
    <div className="header">
      <div className='titles'>
        <Image src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/logo.png`} width={4000} height={4000} alt="logo" className='logo' />
        <h1>高専カンファレンス in 首都</h1>
      </div>
      <div>
      </div>
    </div>
  </header>
);
