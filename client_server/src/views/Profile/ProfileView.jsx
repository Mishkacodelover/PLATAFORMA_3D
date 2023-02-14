import { Box, Grid, Typography } from "@mui/material";

export default function ProfileView() {
  return (
    <Box>
      <Grid container direction={"column"}>
        <Grid item xs={10} md={6}>
          <Typography>Estos son tus datos de usuario:</Typography>
        </Grid>
        <Grid item xs={10} md={6}>
          <Typography>Bienvenido UserName</Typography>
          <Typography>Completa tu perfil</Typography>
        </Grid>
        <Grid item xs={10} md={6}></Grid>
        <Grid item xs={10} md={6}></Grid>
      </Grid>
    </Box>
  );
}
