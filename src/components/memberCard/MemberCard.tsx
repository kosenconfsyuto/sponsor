import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./memberCard.css";

export interface ButtonProps {
  userId: string;
  username: string;
  isLeader: boolean;
  tags: string[];
}

export const MemberCard = ({
  userId,
  username,
  isLeader,
  tags,
  ...props
}: ButtonProps) => {
  return (
    <Link
      className='memberCard'
      href={`https://x.com/${userId}`}
      {...props}
    >
      {/* foregroundはhoverした時にのみ表示 */}
      <div className='foreground'>
        <Image src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/images/x/logo-white.png`} width={2400} height={2453} alt="logo" className='logo' />
      </div>
      <div className='background'>
        <Image src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/images/user/${userId}.jpg`} width={512} height={512} alt="logo" className='icon' />
        <h2 className='username'>{username}</h2>
        {tags &&
          <div className='tags'>
            {isLeader && <div className='tag tag--primary'>代表</div>}
            {tags.map((tag, index) => (
              <div key={index} className='tag tag--secondary'>{tag}</div>
            ))}
          </div>
        }
      </div>
    </Link>
  );
};
