import StyledInput from "./styled";

interface iInputProps {
  type: "text" | "email" | "password" | "select" | "number" | string;
  size?: "largue" | "normal" | "small";
  label: string;
  placeholder: string;
  bgColor?: boolean;
  border?: boolean;
  id: string;
  register: any;
}

const Input = ({
  type,
  size,
  label,
  placeholder,
  bgColor,
  border,
  id,
  register,
}: iInputProps) => {
  switch (type) {
    default:
      return (
        <StyledInput 
          bgColor={bgColor ? bgColor : false}
          border={border ? border : false}
          size={size ? size : "normal"}
          type={type}
        >
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            {...register(id)}
          />
        </StyledInput>
      );
  }
};

export default Input;
