import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
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
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  type: string;
}

/**
 * Primary UI component for user interaction
 */
const ButtonComponent = ({
  variant,
  size = "large",
  backgroundColor,
  label,
  type,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      bgColor={backgroundColor}
      variant={variant}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default ButtonComponent;
