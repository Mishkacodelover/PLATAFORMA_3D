import { Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function AdminDashboardView() {
  return (
    <>
      <Container maxWidth="100%">
        <Typography variant="h2" textAlign="center">
          Panel del administrador
        </Typography>
        <Grid container direction="row" maxWidth="100%" maxHeight="100%">
          <Grid item md={2} sx={{ border: "1px solid black" }}>
            <Link to="/create-collection">
              <Typography>crea nueva colección</Typography>
            </Link>
            <Link to="/admin-collection">
              <Typography>administrar colecciones</Typography>
            </Link>
            <Link to="/admin">
              <Typography>administrar permisos</Typography>
            </Link>
          </Grid>
          <Grid item md={10} sx={{ border: "1px solid black" }}>
            Crea tu primera colección
            <Link to="/create-collection">
              <button>Crear colección</button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
