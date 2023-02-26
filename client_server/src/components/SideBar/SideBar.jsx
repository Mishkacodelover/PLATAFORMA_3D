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

import { useAuthContext } from "../../contexts/AuthContext";

export default function SideBar() {
  const { logout, authorization } = useAuthContext();
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <Paper
      variant="outlined"
      square={true}
      sx={{
        maxWidth: "100%",
        height: "100%",
        backgroundImage:
          "radial-gradient(var(--primario_oscuro),var(--primario))",

        // backgroundColor: "primary.main"
      }}
    >
      <MenuList>
        {navigate.map((page) => (
          <Link to={page.path} key={page.value}>
            <MenuItem sx={{ height: "88px" }}>
              <ListItemIcon sx={{ paddingRight: "16px" }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>{page.icon}</Avatar>
              </ListItemIcon>
              <Typography variant="h6" color="common.white">
                {page.value}
              </Typography>
            </MenuItem>
          </Link>
        ))}
        {authorization.role === 1 ? (
          <Link to="/u/admin">
            <MenuItem sx={{ height: "88px" }}>
              <ListItemIcon sx={{ paddingRight: "16px" }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <AdminPanelSettingsIcon
                    sx={{ fontSize: "24px", color: "common.white" }}
                  />
                </Avatar>
              </ListItemIcon>
              <Typography variant="h6" color="common.white">
                Panel administrador
              </Typography>
            </MenuItem>
          </Link>
        ) : (
          <MenuItem sx={{ height: "88px" }} />
        )}

        <MenuItem sx={{ height: "88px" }} onClick={logout}>
          <ListItemIcon sx={{ paddingRight: "16px" }}>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <LogoutIcon sx={{ fontSize: "24px", color: "common.white" }} />
            </Avatar>
          </ListItemIcon>
          <Typography variant="h6" color="common.white">
            Cerrar sesión
          </Typography>
        </MenuItem>
      </MenuList>
      {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
    </Paper>
  );
}
