import "./receipt.css";
import "@/app/global.css";

interface ReceiptField {
  label: string;
  description: string;
}

interface ReceiptProps {
  fields: ReceiptField[];
  caption?: string;
}

export const Receipt = (props: ReceiptProps) => {
  return (
    <div
      className={"receipt"}
    >
      <div className='receipt__fields'>
        {props.fields.map((field, index) => (
          <div key={index} className='receipt__field'>
            <span className='receipt__label'>{field.label}</span>
            <span className='receipt__description'>{field.description}</span>
          </div>
        ))}
      </div>
      {props.caption && <span className='receipt__caption'>{props.caption}</span>}
    </div>
  );
};