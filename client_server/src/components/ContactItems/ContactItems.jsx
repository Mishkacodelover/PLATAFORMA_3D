import { Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactItems() {
  return (
    <>
      <Grid
        container
        direction="row"
        maxWidth={"100%"}
        alignContent={"center"}
        sx={{ p: "64px", justifyContent: { xs: "center" } }}
      >
        <Grid item container md={4} xs={10} direction="column" spacing={2}>
          <Grid item>
            <EmailIcon sx={{ fontSize: "24px" }} />
          </Grid>
          <Grid item>
            <Typography variant="h5">Email</Typography>
          </Grid>
          <Grid item>
            <Typography>hello@metaStyle.com</Typography>
          </Grid>
        </Grid>
        <Grid item container md={4} xs={10} direction="column" spacing={2}>
          <Grid item>
            <PhoneIcon sx={{ fontSize: "24px" }} />
          </Grid>
          <Grid item>
            <Typography variant="h5">Teléfono</Typography>
          </Grid>
          <Grid item>
            <Typography>+44 777 666 555</Typography>
          </Grid>
        </Grid>
        <Grid item container md={4} xs={10} direction="column" spacing={2}>
          <Grid item>
            <LocationOnIcon sx={{ fontSize: "24px" }} />
          </Grid>
          <Grid item>
            <Typography variant="h5">Oficina</Typography>
          </Grid>
          <Grid item>
            <Typography>Calle del mateverso nº5 29200 Málaga</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
