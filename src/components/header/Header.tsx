import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./header.css";

import NorthEastIcon from "@/components/svg/north_east_24dp_000000_FILL0_wght300_GRAD0_opsz24";

export const Header = () => (
  <header>
    <div className="header">
      <Link className='titles' href="/">
        <Image src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/logo.png`} width={4000} height={4000} alt="logo" className='logo' />
        <div className="texts">
          <p className="eventName">高専カンファレンス in 首都</p>
          <h2 className="siteTitle">スポンサーサイト</h2>
        </div>
      </Link>
      <div className="links">
        <Link href="https://kosenconfsyuto.com/about">
          <span className="text">Overview</span>
        </Link>
        <Link href="/">
          <span className="text">Sponsor</span>
        </Link>
        <Link href="https://kosenconfsyuto.com/contact">
          <span className="text">Contact</span>
        </Link>
        <Link href="https://kosenconfsyuto.com/news">
          <span className="text">News</span>
        </Link>
        <Link href="https://kosenconfsyuto.com/">
          <span className="text">Event Site</span>
          <NorthEastIcon color="none" className="links__icon" />
        </Link>
      </div>
    </div>
  </header>
);
