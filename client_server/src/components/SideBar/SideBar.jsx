import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { navigate } from "./utils/navigate";

import Link from "../Link/Link";
import { Avatar } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { grey } from "@mui/material/colors";
import { useAuthContext } from "../../contexts/AuthContext";

export default function SideBar() {
  const { logout, authorization } = useAuthContext();
  return (
    <Paper sx={{ maxWidth: "1000%", height: "100%" }}>
      <MenuList>
        {navigate.map((page) => (
          <Link to={page.path} key={page.value}>
            <MenuItem sx={{ height: "88px" }}>
              <ListItemIcon sx={{ paddingRight: "16px" }}>
                <Avatar sx={{ bgcolor: grey[800] }}>{page.icon}</Avatar>
              </ListItemIcon>
              <Typography variant="inherit" color="black">
                {page.value}
              </Typography>
            </MenuItem>
          </Link>
        ))}
        {authorization.role === 1 ? (
          <Link to="/u/admin">
            <MenuItem sx={{ height: "88px" }}>
              <ListItemIcon sx={{ paddingRight: "16px" }}>
                <Avatar sx={{ bgcolor: grey[800] }}>
                  <AdminPanelSettingsIcon />
                </Avatar>
              </ListItemIcon>
              <Typography variant="inherit">Panel de administrador</Typography>
            </MenuItem>
          </Link>
        ) : (
          <MenuItem sx={{ height: "88px" }} />
        )}

        <MenuItem sx={{ height: "88px" }} onClick={logout}>
          <ListItemIcon sx={{ paddingRight: "16px" }}>
            <Avatar sx={{ bgcolor: grey[800] }}>
              <LogoutIcon />
            </Avatar>
          </ListItemIcon>
          <Typography variant="inherit">Cerrar sesión</Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
