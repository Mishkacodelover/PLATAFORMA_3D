import { Container, Grid, Typography } from "@mui/material";
import SocialMedia from "../SocialMedia/SocialMedia";
import Link from "../Link/Link";

export default function Footer() {
  return (
    <Container
      maxWidth="100%"
      sx={{
        // backgroundImage:
        //   "linear-gradient(var(--primario_claro),var(--negro_claro))",
        backgroundImage: "linear-gradient(#0A0A0A ,#282829)",
        color: "secodary.light",
        height: "164px",
      }}
    >
      <Grid container direction={"column"}>
        <Grid
          container
          direction={"row"}
          item
          sx={{ paddingTop: "32px", paddingBottom: "32px" }}
        >
          <Grid item md={3}>
            <Typography sx={{ color: "var(_blanco)" }}>Logo</Typography>
          </Grid>
          <Grid item md={6}>
            <Link to="">Enlace uno</Link>
            <Link to="">Enlace uno</Link>
            <Link to="">Enlace uno</Link>
            <Link to="">Enlace uno</Link>
          </Grid>
          <Grid item md={3}>
            <SocialMedia />
          </Grid>
        </Grid>
        <Grid container direction={"row"} item>
          <Grid item md={6}>
            <Typography>2023 All Rights reserved</Typography>
          </Grid>
          <Grid item md={6}>
            <Link to="">Enlace uno</Link>
            <Link to="">Enlace uno</Link>
            <Link to="">Enlace uno</Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
