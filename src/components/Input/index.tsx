import StyledInput from "./styled";

interface iInputProps {
  type: "text" | "email" | "password" | "select" | string;
  label: string;
  placeholder: string;
  bgColor: boolean;
  border: boolean;
  id: string;
}

const Input = ({
  type,
  label,
  placeholder,
  bgColor,
  border,
  id,
}: iInputProps) => {
  switch (type) {
    default:
      return (
        <StyledInput bgColor={bgColor} border={border}>
          <label htmlFor={id}>{label}</label>
          <input type={type} placeholder={placeholder} id={id} />
        </StyledInput>
      );
  }
};

export default Input;
