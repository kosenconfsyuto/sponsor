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
      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
    </svg>
  );
};

export default Component;