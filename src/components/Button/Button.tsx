import styled from "styled-components";

interface ButtonProps {
  variant?: "black" | "gray" | "white" | "brand" | "brandBorder";
  color?: string;
}

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => {
    switch (props.variant) {
      case "black":
        return "var(--color-grey0)";
      case "brandBorder":
        return "var(--color-brand1)";
      default:
        return "var(--color-whiteFixed)";
    }
  }};
  background-color: ${(props) => {
    switch (props.variant) {
      case "black":
        return "var(--color-grey0)";
      case "gray":
        return "var(--color-grey1)";
      case "white":
        return "var(--color-whiteFixed)";
      case "brand":
        return "var(--color-brand1)";
      case "brandBorder":
        return "var(--color-whiteFixed)";
      default:
        return "black";
    }
  }};
  border: ${(props) => {
    switch (props.variant) {
      case "white":
        return "1px solid var(--color-grey0)";
      case "brandBorder":
        return "1px solid var(--color-brand1)";
      default:
        return "none";
    }
  }};
  white-space: nowrap;
`;

export default Button;
