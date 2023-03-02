import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "hsl(284, 24%, 68%)",
      main: "hsl(284, 100%, 41%)",
      dark: "hsl(267, 100%, 49%)",
      contrastText: "hsl(284, 0%, 91%)",
    },
    secondary: {
      light: "hsl(206, 100%, 43%)",
      main: "hsl(206, 94%, 34%)",
      dark: "hsl(206, 92%, 15%)",
      contrastText: "hsl(206, 0%, 91%)",
    },
    error: {
      main: "hsl(349, 81%, 37%)",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "hsl(160, 81%, 37%)",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "hsl(206, 100%, 43%)",
    },
    common: {
      black: "hsl(266, 94%, 4%)",
      white: "hsl(266, 0%, 91%)",
    },
    background: {
      paper: "hsl(240, 3%, 92%)",
      default: "hsl(240, 3%, 92%)",
    },
  },
  typography: {
    fontFamily: "Lora",
    fontSize: 16,
    fontWeightRegular: "500",
    h1: {
      fontFamily: "Oswald",
      fontSize: "3.052rem",
      fontWeightBold: "600",
    },
    h2: {
      fontFamily: "Oswald",
      fontSize: "2.441rem",
      fontWeightBold: "600",
    },
    h3: {
      fontFamily: "Oswald",
      fontSize: "1.953rem",
      fontWeightBold: "600",
    },
    h4: {
      fontFamily: "Oswald",
      fontSize: "1.563rem",
      fontWeightBold: "600",
    },
    h5: {
      fontFamily: "Oswald",
      fontSize: "1.25rem",
      fontWeightBold: "600",
    },
    h6: {
      fontFamily: "Oswald",
      fontSize: "1rem",
      fontWeightBold: "600",
    },
    button: {
      fontFamily: "Oswald",
      letterSpacing: "0.06em",
    },
  },
});
