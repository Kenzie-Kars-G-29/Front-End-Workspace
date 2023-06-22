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
  children?: React.ReactNode;
  onChange?: (prop: any) => void;
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
  children,
  onChange,
}: iInputProps) => {
  switch (type) {
    case "select":
      return (
        <StyledInput
          bgColor={bgColor ? bgColor : false}
          border={border ? border : false}
          size={size ? size : "normal"}
          type={type}
        >
          <label htmlFor={id}>{label}</label>
          <select
            name={id}
            id={id}
            {...register(id)}
            onChange={onChange ? (event) => onChange(event.target.value) : null}
          >
            {children}
          </select>
        </StyledInput>
      );

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
