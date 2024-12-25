import "./item.css";
import "@/app/global.css";
import { ReactNode } from "react";
import ItemIcon from "@/components/svg/check_24dp_000000_FILL0_wght300_GRAD0_opsz24";

interface ItemProps {
  children: ReactNode;
  className?: string;
}

export const Item = (props: ItemProps) => {
  return (
    <div
      className={`CT-item ${props.className}`}
    >
      <ItemIcon className="CT-item__icon" color="none" />
      <div className="CT-item__contents">
        {props.children}
      </div>
    </div>
  );
};