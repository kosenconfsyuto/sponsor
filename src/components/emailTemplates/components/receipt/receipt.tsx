import "./receipt.css";
import "@/app/global.css";

import {
  Container,
  Text,
} from "@react-email/components";

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
    <Container
      style={{
        padding: "0.5rem",
        maxWidth: "15rem",
        border: "#000 1px solid",
      }}
    >
      <Container style={{
        marginBottom: "0.625rem",
      }}>
        {props.fields.map((field, index) => (
          <Container key={index} style={{
            marginBottom: "10px"
          }}>
            <Text style={{
              fontSize: "0.625rem",
              fontWeight: "600",
              marginTop: "0px",
              color: "var(--foreground--dark)",
              marginBottom: "0.375rem"
            }}>{field.label}</Text>
            <Text style={{
              fontSize: "1rem",
              fontWeight: "600",
              margin: "0px",
              color: "var(--foreground)",
            }}>{field.description}</Text>
          </Container>
        ))}
      </Container>
      {props.caption && <Text style={{
        fontSize: "0.625rem",
        fontWeight: "600",
        color: "var(--foreground--dark)",
      }}>{props.caption}</Text>}
    </Container>
  );
};