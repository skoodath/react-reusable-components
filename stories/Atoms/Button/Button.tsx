import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import { MuiButton } from "./Button.styles";

export interface ButtonProps extends MuiButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "outlined" | "contained" | "text";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large" | undefined;
  /**
   * button shape
   */
  edge?:
    | "square"
    | "round-sm"
    | "round-md"
    | "round-lg"
    | "round-full"
    | undefined;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  type: "button" | "submit" | "reset" | undefined;

  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  children,
  variant,
  size = "large",
  edge,
  backgroundColor,
  type,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      bgColor={backgroundColor}
      edge={edge}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
