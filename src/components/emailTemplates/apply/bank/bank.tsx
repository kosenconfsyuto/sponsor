import * as React from "react";
import { Logos } from "@/components/emailTemplates/components/logos/logos";
import { Footer } from "@/components/emailTemplates/components/footer/footer";
import { Receipt } from "@/components/emailTemplates/components/receipt/receipt";
import { Section } from "@/components/emailTemplates/components/section/section";
import { benefits } from "@/lib/datas";
import { Button } from "@/components/emailTemplates/components/button/button";
import { File } from "@/components/emailTemplates/components/file/file";

import "@/app/global.css";
import "./bank.css";

interface EmailTemplateProps {
  sponsorType: "company" | "person";
  name: string;
  nickname: string;
  date: Date;
  amount: number;
  paymentId: number;
}

export const BankEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = props => (
  <div className='mainContents'>
    <div className='logos__par'>
      <Logos isMin={true} />
    </div>
    <p>口座情報をお知らせしますので、下記の口座に必要金額をお振込みください。</p>
    <div className="bankTable">
      <div className="title">銀行名</div>
      <div className="content">三井住友銀行</div>
      <div className="title">支店名</div>
      <div className="content">自由が丘支店</div>
      <div className="title">口座番号</div>
      <div className="content">7451110</div>
      <div className="title">口座名義</div>
      <div className="content">コウセンカンファレンスインシユト</div>
    </div>


    <Section title="請求情報" className='receipt-par'>
      <Receipt
        fields={[
          { label: "協賛の種類", description: props.sponsorType === "company" ? "団体協賛" : "個人協賛" },
          { label: "お名前", description: `${props.name} 様` },
          { label: "ニックネーム", description: props.nickname },
          { label: "日付", description: `${props.date.getFullYear()}年${props.date.getMonth() + 1}月${props.date.getDate()}日` },
          { label: "金額", description: `${props.amount} 円` },
          { label: "支払いID", description: props.paymentId.toString() },
        ]}
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
