import React, { useState } from "react";
import Button, { ButtonProps } from "../../Atoms/Button/Button";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

export type Buttons = {
  caption: string;
  isActive: boolean;
};

interface ButtonTabProps {
  buttons: Buttons[];
  size: ButtonProps["size"];
  alignment: "left" | "right" | "center";
  direction: "horizontal" | "vertical";
}

const ButtonTab = ({ buttons, size, alignment, direction }: ButtonTabProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonAlignment = () => {
    switch (alignment) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Grid
      container
      gap={2}
      justifyContent={buttonAlignment()}
      alignItems="center"
      flexDirection={direction === "horizontal" ? "row" : "column"}
    >
      {buttons.map((button, i) => (
        <Button
          key={button.caption}
          type="button"
          variant={i === activeIndex ? "contained" : "outlined"}
          edge="square"
          onClick={() => handleClick(i)}
          size={size}
        >
          {button.caption}
        </Button>
      ))}
    </Grid>
  );
};

export default ButtonTab;
