export interface Benefit {
  title: string;
  description: string;
  min: number;
  link?: string;
  linkText?: string;
}

export const benefits: Benefit[] = [
  {
    title: "SNSでの紹介",
    description: "貴社について、当カンファレンスのSNSで紹介させていただきます。",
    min: 1,
  },
  {
    title: "HP・Wikiでの紹介",
    description: "貴社について、当カンファレンスのHP・Wikiで紹介させていただきます。",
    min: 1,
  },
  {
    title: "冊子での紹介",
    description: "貴社について、当カンファレンス当日に配布いたします冊子で紹介させていただきます。",
    min: 1,
  },
  {
    title: "参加者Discordサーバーへの招待",
    description: "参加者同士が事前に交流できるDiscordに入っていただき、宣伝活動などをしていただくことができます。",
    min: 5,
    link: "https://discord.gg/ajVrs8HdTx",
    linkText: "Discordサーバーに参加する"
  },
  {
    title: "閉会式・休憩中スライドでの紹介・PR",
    description: "当カンファレンス当日の閉会式・休憩中スライドで、貴社について紹介・PRさせていただきます。",
    min: 5,
  },
  {
    title: "HPでの紹介記事掲載",
    description: "貴社について、ホームページに紹介記事を掲載させていただきます。掲載タイミングを調整することなどもできますので、お気軽にお問い合わせください。",
    min: 10,
  },
  {
    title: "ノベルティの配布",
    description: "ボールペン、クリアファイル、その会社のパンフレットなど、貴社についてのノベルティを配布できます。（人数分のノベルティをご持参ください）",
    min: 10,
  },
  {
    title: "企業登壇",
    description: "当カンファレンスで、貴社について宣伝する登壇を行うことができます。",
    min: 10,
  },
  {
    title: "ユニフォーム(運営パーカー)への企業ロゴ掲載",
    description: "実行委員会のメンバーが来るパーカーに、貴社のロゴを掲載させていただきます。",
    min: 15,
  },
  {
    title: "特別ブース設置",
    description: "貴社について宣伝活動などができる特別ブースを設置させていただきます。",
    min: 15,
  }
];

export interface Member {
  userId: string;
  username: string;
  isLeader: boolean;
  tags: string[];
}

export const members: Member[] = [
  {
    userId: "3476_sora",
    username: "想來",
    isLeader: true,
    tags: ["デザイン", "Twitter"]
  },
  {
    userId: "pann_okome",
    username: "トマトエクレア",
    isLeader: true,
    tags: ["渉外(高専)", "渉外(会場)"]
  },
  {
    userId: "LeeV23313810",
    username: "Lee",
    isLeader: false,
    tags: ["庶務"]
  },
  {
    userId: "U_Star_Sauce",
    username: "うすたー",
    isLeader: false,
    tags: ["会計"]
  },
  {
    userId: "homekinoko",
    username: "実家から毒キノコ",
    isLeader: false,
    tags: ["エンジニア", "デザイナー", "Wiki"]
  }
];

export interface TopLink {
  title: string;
  href: string;
  isExternal: boolean;
}

export const topLinks: TopLink[] = [
  {
    title: "Overview",
    href: "https://kosenconfsyuto.com/about",
    isExternal: false
  },
  {
    title: "Sponsor",
    href: "/",
    isExternal: false
  },
  {
    title: "Contact",
    href: "https://kosenconfsyuto.com/contact",
    isExternal: false
  },
  {
    title: "News",
    href: "https://kosenconfsyuto.com/news",
    isExternal: false
  },
  {
    title: "Event Site",
    href: "https://kosenconfsyuto.com/",
    isExternal: true
  }
];

export interface MetaInfo {
  icon: "article" | "event" | "location" | "group";
  label: string;
  description: string;
}

export const metaInfos: MetaInfo[] = [
  {
    icon: "event",
    label: "開催日",
    description: "2025年3月16日(日)"
  },
  {
    icon: "article",
    label: "テーマ",
    description: "つながり〜まだ見ぬ君とこの場所で〜"
  },
  {
    icon: "location",
    label: "会場",
    description: "としま区民センター"
  },
  {
    icon: "group",
    label: "参加人数(最大)",
    description: "100人"
  },
  {
    icon: "article",
    label: "参加費",
    description: "未定"
  }
];