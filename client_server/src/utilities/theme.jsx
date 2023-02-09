import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "hsl(184, 90%, 50%)",
      main: "hsl(184, 84%, 28%)",
      dark: "hsl(184, 91%, 19%)",
    },
    secondary: {
      light: "hsl(184, 3%, 94%)",
      main: "hsl(184, 96%, 6%)",
      dark: "hsl(184, 96%, 3%)",
    },
    error: {
      main: "hsl(348, 84%, 28%)",
    },
    success: {
      main: "hsl(157, 84%, 28%)",
    },
  },
});
