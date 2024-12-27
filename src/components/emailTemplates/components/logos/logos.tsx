import "./logos.css";
import "@/app/global.css";

interface LogosProps {
  isMin?: boolean;
}

export const Logos = (props: LogosProps) => {
  return (
    <div
      className={`logos ${props.isMin ? "logos--min" : ""}`}
      style={{
        display: "flex",
        flexDirection: !props.isMin ? "column" : "row",
        gap: "0.5rem",
        alignItems: props.isMin ? "center" : "flex-start",
      }}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/images/logo/logo.png`}
        alt="logo"
        width={400}
        height={400}
        className='logos__logo'
        style={{
          width: "3rem",
          height: "3rem",
        }}
      />
      <span
        className='logos__text'
        style={{
          fontSize: "1rem",
          fontWeight: "700",
          color: "var(--color-foreground)"
        }}
      >高専カンファレンス in 首都</span>
    </div>
  );
};