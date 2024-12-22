import React from "react";
import "@/components/footer/footer.css";

import ArticleIcon from "@/components/svg/article_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import EventIcon from "@/components/svg/event_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import GroupIcon from "@/components/svg/group_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import LocationOnIcon from "@/components/svg/location_on_24dp_000000_FILL0_wght300_GRAD0_opsz24";

export const Footer = () => (
  <footer>
    <div className='footer'>
      <div className='footer__eventDetails defaultMaxWidth'>
        <img src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/images/logo/logo.png`} width={4000} height={4000} alt="logo" className='footer__logo' />
        <div className='footer__metas'>
          <KeyValueMetaBox icon="event" keyLabel="開催日" value="2025年3月16日" />
          <KeyValueMetaBox icon="location" keyLabel="会場" value="としま区民センター" />
          <KeyValueMetaBox icon="group" keyLabel="参加人数(最大)" value="100人" />
        </div>
      </div>
      <div className='footer__links'>
        <div className='footer__links--child defaultMaxWidth'>
          <div className='footer__links__box'>
            <h2 className='links__title'>高専カンファレンス in 首都</h2>
            <div className='footer__links__box__conetnts'>
              <a href="https://kosenconfsyuto.com">ポータルサイト</a>
              <a href="https://sponsor.kosenconfsyuto.com">スポンサーを検討されている方へ</a>
              <a href="https://kosenconfsyuto.com/about">開催概要</a>
              <a href="https://kosenconfsyuto.com/privacy-policy">プライバシーポリシー</a>
              <a href="https://kosenconfsyuto.com/contact">お問い合わせ</a>
            </div>
          </div>
          <div className='footer__links__box'>
            <h2 className='links__title'>関連サイト</h2>
            <div className='footer__links__box__conetnts'>
              <a href="https://kosenconf.jp">高専カンファレンス</a>
            </div>
          </div>
          <div className='footer__links__box'>
            <h2 className='links__title'>SNS</h2>
            <div className='footer__links__box__conetnts'>
              <a href="https://x.com/kosenconfsyuto">Twitter</a>
              <a href="https://www.instagram.com/kosenconfsyuto/">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export interface MetaProps {
  icon: "event" | "article" | "location" | "group";
  keyLabel: string;
  value: string;
}

export const KeyValueMetaBox = ({
  icon,
  keyLabel,
  value,
  ...props
}: MetaProps) => {
  return (
    <div
      className='keyValueMetaBox'
      {...props}
    >
      <div className='keyValueMetaBox__keys'>
        <div className='keyValueMetaBox__icon'>
          {icon === "event" && <EventIcon color='none' />}
          {icon === "article" && <ArticleIcon color='none' />}
          {icon === "location" && <LocationOnIcon color='none' />}
          {icon === "group" && <GroupIcon color='none' />}
        </div>
        <span className='keyValueMetaBox__key'>{keyLabel}</span>
      </div>
      <p className='keyValueMetaBox__value'>{value}</p>
    </div>
  );
};