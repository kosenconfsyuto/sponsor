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
      style={{
        padding: "0.5rem",
        maxWidth: "15rem",
        border: "var(--foreground) 1px solid",
      }}
    >
      <div className='receipt__fields' style={{
        marginBottom: "0.625rem",
      }}>
        {props.fields.map((field, index) => (
          <div key={index} className='receipt__field'>
            <span className='receipt__label' style={{
              fontSize: "0.625rem",
              fontWeight: "600",
              color: "var(--foreground--dark)",
              marginBottom: "0.375rem"
            }}>{field.label}</span>
            <span className='receipt__description' style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "var(--foreground)",
            }}>{field.description}</span>
          </div>
        ))}
      </div>
      {props.caption && <span className='receipt__caption' style={{
        fontSize: "0.625rem",
        fontWeight: "600",
        color: "var(--foreground--dark)",
      }}>{props.caption}</span>}
    </div>
  );
};