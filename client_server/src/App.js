import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Registration from "./views/Registration";
import Layout from "./components/Layout/Layout";
import AdminDashboard from "./views/AdminDashboard";
import CreateCollection from "./views/CreateCollection";

import { ThemeProvider } from "@mui/material";
import { theme } from "./utilities/theme.jsx";
import { AuthContextProvider } from "./contexts/AuthContext";

import Home from "./views/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="admin" element={<AdminDashboard />} />
                <Route
                  path="create-collection"
                  element={<CreateCollection />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
