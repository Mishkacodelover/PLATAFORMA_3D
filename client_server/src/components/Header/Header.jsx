import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { Button, Grid } from "@mui/material";

import Link from "../Link/Link";
import logo from "../../assets/images/otros/logometa.png";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "common.white" }}>
        <Grid
          container
          direction="row"
          alignItems={"center"}
          justifyContent="space-evenly"
        >
          <Grid item sx={{ justifyContent: "left" }} md={8}>
            <Link to="/">
              <img src={logo} alt="logo" width="440px" />
            </Link>
          </Grid>

          <Grid item sx={{ justifyContent: "flex-end" }} md={3}>
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
                Iniciar sesión
              </Button>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
