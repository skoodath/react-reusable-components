import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

interface TextFieldProps {
  label: string;
  name: string;
  required: boolean;
  variant: "filled" | "outlined" | "standard" | undefined;
  size?: "small" | "medium" | undefined;
  type?: "password" | "text" | "email" | "number" | undefined;
  onChange: () => void;
}

const TextField = ({
  label,
  required,
  variant,
  size,
  type,
  name,
  onChange,
}: TextFieldProps) => {
  return (
    <MuiTextField
      label={label}
      name={name}
      required={required}
      variant={variant}
      size={size}
      type={type}
      fullWidth
      onChange={onChange}
    />
  );
};

export default TextField;
