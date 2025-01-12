import React from "react";
import "@/components/footer/footer.css";

import ArticleIcon from "@/components/svg/article_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import EventIcon from "@/components/svg/event_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import GroupIcon from "@/components/svg/group_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import LocationOnIcon from "@/components/svg/location_on_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import {
  Container,
  Heading,
  Img,
  Link,
  Text,
} from "@react-email/components";

export const Footer = () => (
  <Container>
    <Container className='footer'>
      <Container className='footer__eventDetails defaultMaxWidth'>
        <Img 
          src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/images/logo/logo.png`} 
          width={4000} 
          height={4000} 
          alt="logo" 
          className='footer__logo' 
          style={{
            width: "3rem",
            height: "3rem",
          }} />
        <Container className='footer__metas'>
          <KeyValueMetaBox icon="event" keyLabel="開催日" value="2025年3月16日" />
          <KeyValueMetaBox icon="location" keyLabel="会場" value="としま区民センター" />
          <KeyValueMetaBox icon="group" keyLabel="参加人数(最大)" value="100人" />
        </Container>
      </Container>
      <Container className='footer__links'>
        <Container className='footer__links--child defaultMaxWidth'>
          <Container className='footer__links__box'>
            <Heading className='links__title'>高専カンファレンス in 首都</Heading>
            <Container className='footer__links__box__conetnts'>
              <Link href="https://kosenconfsyuto.com">ポータルサイト</Link>
              <br />
              <Link href="https://sponsor.kosenconfsyuto.com">スポンサーを検討されている方へ</Link>
              <br />
              <Link href="https://kosenconfsyuto.com/about">開催概要</Link>
              <br />
              <Link href="https://kosenconfsyuto.com/privacy-policy">プライバシーポリシー</Link>
              <br />
              <Link href="https://kosenconfsyuto.com/contact">お問い合わせ</Link>
            </Container>
          </Container>
          <Container className='footer__links__box'>
            <Heading className='links__title'>関連サイト</Heading>
            <Container className='footer__links__box__conetnts'>
              <Link href="https://kosenconf.jp">高専カンファレンス</Link>
            </Container>
          </Container>
          <Container className='footer__links__box'>
            <Heading className='links__title'>SNS</Heading>
            <Container className='footer__links__box__conetnts'>
              <Link href="https://x.com/kosenconfsyuto">Twitter</Link>
              <Link href="https://www.instagram.com/kosenconfsyuto/">Instagram</Link>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  </Container>
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
      <Container className='keyValueMetaBox__keys'>
        <Container className='keyValueMetaBox__icon'>
          {icon === "event" && <EventIcon color='none' />}
          {icon === "article" && <ArticleIcon color='none' />}
          {icon === "location" && <LocationOnIcon color='none' />}
          {icon === "group" && <GroupIcon color='none' />}
        </Container>
        <Text className='keyValueMetaBox__key'>{keyLabel}</Text>
      </Container>
      <Text className='keyValueMetaBox__value'>{value}</Text>
    </div>
  );
};