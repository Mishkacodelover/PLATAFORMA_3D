import { Typography, Box, Grid } from "@mui/material";

export default function AdminDashboardView() {
  return (
    <>
      <Typography variant="h6" textAlign="center">
        Panel del administrador/aqui va el navbar
      </Typography>
      <Box>
        <Grid container direction="row" maxWidth="100%" maxHeight="100%">
          <Grid item md={12}>
            <Grid item>texto breve explicacion</Grid>
            <Grid item>botón invitar usuarios</Grid>
          </Grid>
          <Grid item>
            <Grid item>texto</Grid>
            <Grid item>renderizan los usuarios invitados</Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
