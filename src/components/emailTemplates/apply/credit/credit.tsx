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
    <style>{`
      :root {
        --background: #ffffff;
        --background-light: #dfdfdf;
        --background-dark: #F9F9F9;
        --foreground: #171717;
        --foreground-light: #333333;
        --foreground-dark: #717171;
        --color-theme: #1155cc;
        --color-theme-hover: #0a3d91;
        --color-theme-light: #90acdc;
        --color-theme-thin: #1155cc33;
        --border-thin-color: #c8c8c8;
        --border-thin: 1px solid var(--border-thin-color);
        --color-error: #ce0000;
        --color-success: #4caf50;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --background: #0a0a0a;
          --background-light: #272727;
          --background-dark: #313131;
          --foreground: #ededed;
          --foreground-light: #000000;
          --foreground-dark: #b3b3b3;
          --color-theme: #90acdc;
          --color-theme-hover: #0a3d91;
          --color-theme-light: #1155cc;
          --color-theme-thin: #1155cc33;
          --border-thin-color: #333333;
          --border-thin: 1px solid var(--border-thin-color);
          --color-error: #fc8383;
          --color-success: #68c06b;
        }
      }
    `}</style>
    <div style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      marginBottom: "0.75rem"
    }}>
      <Logos isMin={true} />
    </div>
    <img
      src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/mail/thanks.png`}
      alt="logo"
      width={1156}
      height={217}
      style={{
        marginBottom: "1.5rem"
      }}
    />
    <Section title="領収書" className="receipt-par" style={{
      width: "fit-content",
      margin: "0 auto",
      marginBottom: "1.5rem",
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
    <Section title="特典" style={{
      marginBottom: "1.5rem"
    }}>
      <Receipt fields={[{ label: "協賛いただいた口数", description: `${props.sponsorType === "company" ? (Math.floor(props.amount / 10000)) : (Math.floor(props.amount / 1000))}口` }]} />
      <div className='benefits'>
        {benefits.map((benefit, index) => {
          if (benefit.min > Math.floor(props.amount / 10000)) {
            return null;
          }
          return (
            <div key={index} className='benefit' style={{
              marginBottom: "1.5rem"
            }}>
              <div className='benefit__title' style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "var(--foreground)",
                marginBottom: "0.5rem"
              }}>{benefit.title}</div>
              <div className='benefit__description' style={{
                fontSize: "0.75rem",
                color: "var(--foreground--dark)",
                marginBottom: "0.5rem"
              }}>{benefit.description}</div>
              {(benefit.link && benefit.linkText) ?
                <Button
                  href={benefit.link}
                  label={benefit.linkText}
                  primary={true}
                  size='small'
                  style={{
                    marginBottom: "0.5rem"
                  }}
                />
                : <></>}
            </div>
          );
        })}
      </div>
    </Section>
    <Section title='運営メンバーについて' description='所属や学年、名前などはこちらからご覧いただけます。個人情報を含みますので、扱いには十分ご留意ください。' className='members-par' style={{
      width: "fit-content",
      margin: "0 auto",
      alignItems: "center",
      marginBottom: "1.5rem"
    }}>
      <File
        thumbnailSrc={`${process.env.NEXT_PUBLIC_CDN_DOMAIN}/wjqn69tgacyumq66/thumbnail.jpg`}
        thumbnailAlt='個人情報開示目録'
        thumbnailWidth={595}
        thumbnailHeight={842}
        href={`${process.env.NEXT_PUBLIC_CDN_DOMAIN}/wjqn69tgacyumq66/names.pdf`}
        description='運営メンバー一覧'
      />
    </Section>
    <Section title="参考: 協賛資料" description='協賛資料は、こちらからご覧いただけます。' className='introduceWeb-par' style={{
      marginBottom: "1.5rem"
    }}>
      <Button
        href={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/pdf/sponsor.pdf`}
        label="協賛資料を見る"
        primary={false}
        size="medium"
      />
    </Section>
    <Footer />
  </div>
);
