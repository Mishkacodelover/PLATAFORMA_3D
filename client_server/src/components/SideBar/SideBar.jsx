import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { navigation } from "./utils/navigation";
import Link from "../Link/Link";
import { Avatar } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { grey } from "@mui/material/colors";

export default function SideBar() {
  return (
    <Paper sx={{ width: 248, height: "100%" }}>
      <MenuList>
        {navigation.map((page) => (
          <MenuItem key={page.value} sx={{ height: "88px" }}>
            <ListItemIcon sx={{ paddingRight: "16px" }}>
              <Avatar sx={{ bgcolor: grey[800] }}>
                <PageviewIcon />
              </Avatar>
            </ListItemIcon>
            <Typography variant="inherit" color="white">
              <Link to={page.path}>{page.value}</Link>
            </Typography>
          </MenuItem>
        ))}

        <MenuItem sx={{ height: "88px" }}>
          <ListItemIcon sx={{ paddingRight: "16px" }}>
            <Avatar sx={{ bgcolor: grey[800] }}>
              <AdminPanelSettingsIcon />
            </Avatar>
          </ListItemIcon>
          <Typography variant="inherit">
            <Link to="/admin">Panel de administrador</Link>
          </Typography>
        </MenuItem>

        <MenuItem sx={{ height: "88px" }}>
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
