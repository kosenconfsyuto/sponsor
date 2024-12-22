import { CSSProperties } from "react";

/** Propsの型定義 */
interface PropsType {
    style?: CSSProperties;
    color?: string;
    className?: string;
}

const Component = (props: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={props.color ? props.color : "#000"} style={props.style ? props.style : undefined} className={props.className}>
      <path d="M665.08-450H180v-60h485.08L437.23-737.85 480-780l300 300-300 300-42.77-42.15L665.08-450Z" />
    </svg>
  );
};

export default Component;