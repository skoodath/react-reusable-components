import { Box, Stack, Typography, styled } from "@mui/material";

const MultiStepStyles = {
  Root: styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey[200],
    width: "60dvw",
    margin: "0 auto",
  })),
  Wrapper: styled(Stack)(({ theme }) => ({
    marginBlockEnd: theme.spacing(3),
  })),
  Heading: styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
  })),
};

export default MultiStepStyles;
