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
      <path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" />
    </svg>
  );
};

export default Component;