import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { TextField as FormikTextField } from "formik-mui";

interface TextFieldProps {
  label: string;
  required: boolean;
  variant: "filled" | "outlined" | "standard" | undefined;
  size?: "small" | "medium" | undefined;
  type?: "password" | "text" | "email" | "number" | undefined;
}

const TextField = ({
  label,
  required,
  variant,
  size,
  type,
}: TextFieldProps) => {
  return (
    <MuiTextField
      label={label}
      required={required}
      variant={variant}
      size={size}
      type={type}
    />
  );
};

export default TextField;
