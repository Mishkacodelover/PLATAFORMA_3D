import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "../Link/Link";
import logo from "../../assets/images/otros/logometa.png";

const pages = ["Producto", "Precios", "Sobre nosotros"];
const settings = [
  {
    label: "Acceso a empresas",
    path: "/login",
  },
  {
    label: "Acceso a invitados",
    path: "/login-invited",
  },
];

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "common.white" }}>
        <Grid container direction="row" alignItems={"center"}>
          <Grid item sx={{ justifyContent: "left", marginLeft: "24px" }} md={8}>
            <img src={logo} alt="logo" width="440px" />
          </Grid>

          <Grid item sx={{ justifyContent: "flex-end" }}>
            <Link to="">
              <Button
                size="large"
                sx={{
                  fontSize: "18px",
                  color: "secondary.dark",
                }}
              >
                sobre nosotros
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="large"
                sx={{
                  fontSize: "18px",
                  color: "secondary.dark",
                }}
              >
                empresas
              </Button>
            </Link>

            <Link to="/login-invited">
              <Button
                size="large"
                sx={{
                  fontSize: "18px",
                  color: "secondary.dark",
                }}
              >
                invitados
              </Button>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
