import { Box, Grid } from "@mui/material";

import InternalHeader from "../../components/InternalHeader/InternalHeader";
import HandleUser from "../../components/HandleUser/HandleUser";
import HandleRoles from "../../components/HandleRoles";

export default function AdminDashboardView() {
  return (
    <Box>
      <Grid container maxWidth={"100%"} sx={{ maxHeight: "100%" }}>
        <InternalHeader
          text="Gestión de usuarios"
          sx={{ textAlign: "left", p: "16px" }}
        />
        <Grid
          container
          sx={{
            border: "1px solid black",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Grid item xs={10} md={7} sx={{ border: "1px solid black" }}>
            <HandleRoles />
          </Grid>
          <Grid item xs={10} md={5} sx={{ border: "1px solid black" }}>
            <HandleUser />
          </Grid>
          <Grid item xs={10} md={7} sx={{ border: "1px solid black" }}>
            Invitaciones pendientes
          </Grid>
          <Grid item xs={10} md={5} sx={{ border: "1px solid black" }}>
            abajo drch
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
