import { ButtonProps, ThemeOptions, styled, useTheme } from "@mui/material";
import Button from "@mui/material/Button";

type Size = "small" | "medium" | "large" | undefined;
type Edge =
  | "square"
  | "round-sm"
  | "round-md"
  | "round-lg"
  | "round-full"
  | undefined;

type Props = {
  bgColor?: string;
  size?: Size;
  edge?: Edge;
} & ButtonProps;
export const MuiButton = styled(Button, {
  shouldForwardProp: (props) => props !== ("bgColor" && "size" && "edge"),
})<Props>(({ bgColor, theme, size, edge }) => {
  /**  */
  const setSize = (size: Size) => {
    switch (size) {
      case "small":
        return theme?.typography?.body2?.fontSize;
      case "medium":
        return theme.typography.body1.fontSize;
      default:
        return theme.typography.h6.fontSize;
    }
  };

  const setRadius = (edge: Edge) => {
    switch (edge) {
      case "square":
        return 0;
      case "round-sm":
        return 2;
      case "round-md":
        return 4;
      case "round-lg":
        return 8;
      case "round-full":
        return 50;
      default:
        return undefined;
    }
  };

  return {
    backgroundColor: bgColor,
    fontSize: setSize(size),
    borderRadius: setRadius(edge),
  };
});
