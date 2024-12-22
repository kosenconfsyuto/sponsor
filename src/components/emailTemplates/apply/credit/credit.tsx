import * as React from "react";
import { Logos } from "@/components/emailTemplates/components/logos/logos";
import { Footer } from "@/components/emailTemplates/components/footer/footer";
import { Receipt } from "@/components/emailTemplates/components/receipt/receipt";
import { Section } from "@/components/emailTemplates/components/section/section";
import { benefits } from "@/lib/datas";
import { Button } from "@/components/emailTemplates/components/button/button";
import { File } from "@/components/emailTemplates/components/file/file";

import "@/app/global.css";
import "./credit.css";

interface EmailTemplateProps {
  sponsorType: "company" | "person";
  name: string;
  nickname: string;
  date: Date;
  amount: number;
  paymentId: number;
}

export const CreditEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = props => (
  <div className='mainContents'>
    <div style={{
      width: "100%",
      display: "flex",
      alignItems: "center"
    }}>
      <Logos isMin={true} />
    </div>
    <img
      src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/mail/thanks.png`}
      alt="logo"
      width={1156}
      height={217}
    />
    <Section title="領収書" className="receipt-par" style={{
      display: "flex",
      width: "fit-content",
      margin: "0 auto"
    }}>
      <Receipt
        fields={[
          { label: "協賛の種類", description: props.sponsorType === "company" ? "団体協賛" : "個人協賛" },
          { label: "お名前", description: `${props.name} 様` },
          { label: "ニックネーム", description: props.nickname },
          { label: "日付", description: `${props.date.getFullYear()}年${props.date.getMonth() + 1}月${props.date.getDate()}日` },
          { label: "金額", description: `${props.amount} 円` },
          { label: "支払いID", description: props.paymentId.toString() },
        ]}
        caption="※決済代行サービスを使用しているため、クレジットカードでのお支払いの場合、クレジットカード情報はサーバー上に保持されません。"
      />
    </Section>
    <Section title="特典">
      <Receipt fields={[{ label: "協賛いただいた口数", description: `${Math.floor(props.amount / 10000)}口` }]} />
      <div className='benefits'>
        {benefits.map((benefit, index) => {
          if (benefit.min > Math.floor(props.amount / 10000)) {
            return null;
          }
          return (
            <div key={index} className='benefit'>
              <div className='benefit__title'>{benefit.title}</div>
              <div className='benefit__description'>{benefit.description}</div>
              {(benefit.link && benefit.linkText) ?
                <Button 
                  href={benefit.link}
                  label={benefit.linkText}
                  primary={true}
                  size='small'
                />
                : <></>}
            </div>
          );
        })}
      </div>
    </Section>
    <Section title="SNS・HP・Wikiでの紹介について" description='どのような内容の紹介をしたいかについて、アンケートにご回答ください。' className='introduceWeb-par'>
      <Button
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/sponsor/introduce?paymentId=${props.paymentId}`}
        label="アンケートに回答"
        primary={true}
        size="medium"
      />
    </Section>
    <Section title='運営メンバーについて' description='所属や学年、名前などはこちらからご覧いただけます。個人情報を含みますので、扱いには十分ご留意ください。' className='members-par'>
      <File
        thumbnailSrc={`${process.env.NEXT_PUBLIC_CDN_DOMAIN}/wjqn69tgacyumq66/thumbnail.jpg`}
        thumbnailAlt='個人情報開示目録'
        thumbnailWidth={595}
        thumbnailHeight={842}
        href={`${process.env.NEXT_PUBLIC_CDN_DOMAIN}/wjqn69tgacyumq66/names.pdf`}
        description='運営メンバー一覧'
      />
    </Section>
    <Section title="参考: 協賛資料" description='協賛資料は、こちらからご覧いただけます。' className='introduceWeb-par'>
      <Button
        href={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/kosenconfsyuto/pdf/sponsor.pdf`}
        label="協賛資料を見る"
        primary={false}
        size="medium"
      />
    </Section>
    <Footer />
  </div>
);
