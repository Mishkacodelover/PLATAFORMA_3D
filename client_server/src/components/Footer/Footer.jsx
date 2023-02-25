import { Box, Grid, Typography } from "@mui/material";
import SocialMedia from "../SocialMedia/SocialMedia";
import logo from "../../assets/images/otros/logometa_blanco.png";
import Link from "../Link/Link";

export default function Footer() {
  return (
    <Box
      maxWidth="100%"
      sx={{
        backgroundImage: "linear-gradient(var(--primario),var(--azul))",
        minHeight: { md: "188px", xs: "100%" },
      }}
    >
      <Grid container direction={"column"}>
        <Grid
          container
          direction={"row"}
          item
          sx={{
            paddingTop: "32px",
            paddingBottom: "36px",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item md={3}>
            <img src={logo} alt="logo" width={"248px"} />
          </Grid>
          <Grid item md={6} container spacing={2} justifyContent="center">
            <Grid item>
              <Link to="">
                <Typography color="common.white">Sobre nosotros</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="">
                <Typography color="common.white">Ayuda</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="">
                <Typography color="common.white">
                  Políticas de privacidad
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <SocialMedia />
          </Grid>
        </Grid>
        <Grid container direction={"row"} sx={{ textAlign: "center" }}>
          <Grid item md={12} xs={10}>
            <Typography textAlign={"center"}>
              2023 All Rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
