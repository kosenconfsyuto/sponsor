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
      <path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/>
    </svg>
  );
};

export default Component;