import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Registration from "./views/Registration";
import Layout from "./components/Layout/Layout";
import LayoutInternal from "./components/LayoutInternal/LayoutInternal.jsx";
import AdminDashboard from "./views/AdminDashboard";

import Profile from "./views/Profile";
import Collections from "./views/Collections";
import Piece from "./views/Piece";
import GraficResources from "./views/GraficResources";
import Patterns from "./views/Patterns";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

import { ThemeProvider } from "@mui/material";
import { theme } from "./utilities/theme.jsx";
import { AuthContextProvider } from "./contexts/AuthContext";
import { useAuthContext } from "./contexts/AuthContext.jsx";
import { UserContextProvider } from "./contexts/UserContext";

import Home from "./views/Home";

function App() {
  const { authorization } = useAuthContext();
  // const admin = authorization.role === 1;
  // const designer = authorization.role === 2;
  // const operator = authorization.role === 3;
  // const workshop = authorization.role === 4;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <UserContextProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route element={<PublicRoutes />}>
                    <Route path="login" element={<Login />} />
                  </Route>

                  <Route path="registration" element={<Registration />} />
                </Route>

                <Route
                  element={<PrivateRoutes allowedRoles={authorization.role} />}
                >
                  <Route element={<LayoutInternal />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="admin" element={<AdminDashboard />} />
                    <Route path="collections" element={<Collections />} />

                    <Route path="piece" element={<Piece />} />
                    <Route
                      path="grafic-resources"
                      element={<GraficResources />}
                    />
                    <Route path="patterns" element={<Patterns />} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </UserContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
