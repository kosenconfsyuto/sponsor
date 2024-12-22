import "./logos.css";
import "@/app/global.css";

interface LogosProps {
  isMin?: boolean;
}

export const Logos = (props: LogosProps) => {
  return (
    <div
      className={`logos ${props.isMin ? "logos--min" : ""}`}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/images/logo/logo.png`}
        alt="logo"
        width={400}
        height={400}
        className='logos__logo'
      />
      <span className='logos__text'>高専カンファレンス in 首都</span>
    </div>
  );
};