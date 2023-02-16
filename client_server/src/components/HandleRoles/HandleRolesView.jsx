import { Typography, Box, Grid, Button } from "@mui/material";
import Link from "../../components/Link/Link";

export default function HandleRolesView() {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Grid
          container
          direction={"row"}
          sx={{ alignContent: "flex-start", justifyContent: "space-around" }}
        >
          <Grid item>
            <Link to="">
              <Typography>Roles</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="">
              <Typography>Datos fiscales</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="">
              <Typography>Notificaciones</Typography>
            </Link>
          </Grid>
        </Grid>
        <Typography>Gestionar permisos de usuarios</Typography>
        <Button>Invitar usuario</Button>
      </Box>
    </>
  );
}
