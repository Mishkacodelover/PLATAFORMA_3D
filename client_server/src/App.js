import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import LoginInvited from "./views/LoginInvited";
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
import FinalPiece from "./views/FinalPiece/FinalPiece";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utilities/theme.jsx";
import { AuthContextProvider } from "./contexts/AuthContext";
import { roles } from "./const/roles";
import Home from "./views/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route element={<PublicRoutes />}>
                  <Route path="login" element={<Login />} />
                  <Route path="login-invited" element={<LoginInvited />} />
                </Route>

                <Route path="registration" element={<Registration />} />
              </Route>
              <Route path="/u/" element={<LayoutInternal />}>
                <Route
                  element={
                    <PrivateRoutes
                      allowedRoles={[
                        roles.admin,
                        roles.designer,
                        roles.operator,
                        roles.workshop,
                      ]}
                    />
                  }
                >
                  <Route path="profile" element={<Profile />} />

                  <Route path="collections" element={<Collections />} />

                  <Route path="piece" element={<Piece />} />
                  <Route
                    path="grafic-resources"
                    element={<GraficResources />}
                  />
                  <Route path="patterns" element={<Patterns />} />

                  <Route path="piece-all" element={<FinalPiece />} />

                  <Route
                    element={<PrivateRoutes allowedRoles={[roles.admin]} />}
                  >
                    <Route path="admin" element={<AdminDashboard />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
