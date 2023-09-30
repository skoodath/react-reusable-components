import Button, { ButtonProps } from "@/stories/Atoms/Button/Button";
import { Box, Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import ButtonStyles from "./TabNav.styles";

interface TabNavProps {
  navItems: string[];
  buttonVariant: ButtonProps["variant"];
  buttonRadius: ButtonProps["edge"];
  buttonSize: ButtonProps["size"];
  buttonBackground: string;
}

const TabNav = ({
  navItems,
  buttonVariant,
  buttonRadius,
  buttonSize,
  buttonBackground,
}: TabNavProps) => {
  const [tabItems, setTabItems] = useState([...navItems]);

  const handleButtonClick = (index: number) => {
    let temp = [...tabItems];
    [temp[0], temp[index]] = [temp[index], temp[0]];
    setTabItems([...temp]);
  };

  const gridRef = useRef<HTMLDivElement>(null);
  const inactiveButtons = tabItems.slice(1);

  return (
    <ButtonStyles.Container container>
      <Grid item ref={gridRef}>
        <Button
          edge={buttonRadius}
          size={buttonSize}
          backgroundColor={buttonBackground}
          type="button"
          variant={buttonVariant}
        >
          {tabItems[0]}
        </Button>
      </Grid>
      <Grid item sx={{ display: "flex" }}>
        {inactiveButtons.map((navItem, i) => (
          <Grid key={navItem} item mb={1}>
            <Button
              edge={buttonRadius}
              size={buttonSize}
              backgroundColor={"#1edede"}
              type="button"
              variant={buttonVariant}
              onClick={() => handleButtonClick(i + 1)}
            >
              {navItem}
            </Button>
          </Grid>
        ))}
      </Grid>
    </ButtonStyles.Container>
  );
};

export default TabNav;
