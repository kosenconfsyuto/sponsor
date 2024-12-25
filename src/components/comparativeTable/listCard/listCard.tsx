import { Item } from "@/components/comparativeTable/item/item";
import { benefits, plans } from "@/lib/datas";

import "./listCard.css";

interface ListCardProps {
  unit: number;
  className?: string;
}

export const ListCard = (props: ListCardProps) => {
  return (
    <div className={["CT-listCard", props.className].join(" ")}>
      {plans
        .filter((plan) => plan.min === props.unit)
        .map((plan, index) => (
          <div className="titles" key={index}>
            <span className="titles__title">{plan.title}</span>
            <div className="prices">
              <p>
                <span className="num">{plan.min}</span>
                <span className="unit">口</span>
              </p>
              <span className="amount">¥{plan.min * 10000}~</span>
            </div>
          </div>
        ))}
      <div className="benefits">
        {props.unit > 1 ? (
          <Item>下位プランの全特典</Item>
        ) : null}
        {benefits
          .filter((benefit) => benefit.min === props.unit)
          .map((benefit, index) => (
            <Item key={index}>{benefit.title}</Item>
          ))}
      </div>
    </div>
  );
};