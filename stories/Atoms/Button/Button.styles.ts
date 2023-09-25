import { ButtonProps, styled } from "@mui/material";
import Button from "@mui/material/Button";

type Props = {
  bgColor?: string;
  size?: "small" | "medium" | "large";
} & ButtonProps;
export const StyledButton = styled(Button, {
  shouldForwardProp: (props) => props !== ("bgColor" && "size"),
})<Props>(({ theme, bgColor, size }) => ({
  fontSize:
    size === "small"
      ? theme.typography.body2.fontSize
      : size === "medium"
      ? theme.typography.body1.fontSize
      : theme.typography.h6.fontSize,
}));
