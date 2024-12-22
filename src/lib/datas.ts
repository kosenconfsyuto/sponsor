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