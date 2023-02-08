import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Layout from "./components/Layout/Layout";
import AdminDashboard from "./views/AdminDashboard";
import CreateCollection from "./views/CreateCollection";
import { createTheme, ThemeProvider } from "@mui/material";

import Home from "./views/Home";

const theme = createTheme({
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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="create-collection" element={<CreateCollection />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
