import { Box, Typography, Grid } from "@mui/material";
import elle from "../../assets/images/LOGOS/ELLE.png";
import vogue from "../../assets/images/LOGOS/VOGUE.png";
import forbes from "../../assets/images/LOGOS/forbes.png";
import vgsn from "../../assets/images/LOGOS/VGSN.png";

export default function Partners() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        maxWidth: "100%",
        minHeight: "200px",
      }}
    >
      <Typography
        variant="h5"
        color="common.black"
        textAlign={"left"}
        sx={{ paddingLeft: "78px", paddingTop: "36px" }}
      >
        Nos halaga que nos mencionen en...
      </Typography>
      <Grid container direction="row" md={12} xs={10}>
        <Grid item md={3} xs={5} sx={{ maxWidth: { md: "100%", xs: "50%" } }}>
          <img src={elle} alt="elle" />
        </Grid>
        <Grid item md={3} xs={5} sx={{ maxWidth: { md: "100%", xs: "50%" } }}>
          <img src={vogue} alt="vogue" />
        </Grid>
        <Grid item md={3} xs={5} sx={{ maxWidth: { md: "100%", xs: "50%" } }}>
          <img src={forbes} alt="forbes" />
        </Grid>
        <Grid item md={3} xs={5} sx={{ maxWidth: { md: "100%", xs: "50%" } }}>
          <img src={vgsn} alt="vgsn" />
        </Grid>
      </Grid>
    </Box>
  );
}
