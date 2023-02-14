import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Registration from "./views/Registration";
import Layout from "./components/Layout/Layout";
import LayoutInternal from "./components/LayoutInternal/LayoutInternal.jsx";
import AdminDashboard from "./views/AdminDashboard";
import CreateCollection from "./views/CreateCollection";
import Profile from "./views/Profile";
import Collections from "./views/Collections";
import Piece from "./views/Piece";
import GraficResources from "./views/GraficResources";
import Patterns from "./views/Patterns";

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
              </Route>
              <Route element={<LayoutInternal />}>
                <Route path="profile" element={<Profile />} />
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="collections" element={<Collections />} />
                <Route
                  path="create-collection"
                  element={<CreateCollection />}
                />
                <Route path="piece" element={<Piece />} />
                <Route path="grafic-resources" element={<GraficResources />} />
                <Route path="patterns" element={<Patterns />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
