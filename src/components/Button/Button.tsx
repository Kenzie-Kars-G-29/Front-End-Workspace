import styled from "styled-components";

interface ButtonProps {
  variant?: "black" | "gray" | "blue" | "white" | "brand" | "red";
  color?: string;
}

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  color: ${(props) =>
    props.variant === "white" ? "black" : "white"}; // Define a cor do texto
  background-color: ${(props) => {
    switch (props.variant) {
      case "black":
        return "black";
      case "gray":
        return "gray";
      case "blue":
        return "blue";
      case "white":
        return "white";
      case "brand":
        return "var(--color-brand1)";
      case "red":
        return "var(--color-alert2)";
      default:
        return "black";
    }
  }};
  border: ${(props) =>
    props.variant === "white" ? "1px solid black" : "none"};
  white-space: nowrap;
`;

export default Button;
