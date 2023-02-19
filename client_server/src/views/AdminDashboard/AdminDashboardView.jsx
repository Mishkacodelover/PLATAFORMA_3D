import { Box, Grid } from "@mui/material";

import InternalHeader from "../../components/InternalHeader/InternalHeader";
import HandleUser from "../../components/HandleUser";
import HandleData from "../../components/HandleData/HandleData";
import InvitedUser from "../../components/InvitedUser";

export default function AdminDashboardView() {
  return (
    <Box>
      <Grid container maxWidth={"100%"} sx={{ maxHeight: "100%" }}>
        <InternalHeader text="Panel de administador" />
        <Grid
          container
          sx={{
            border: "1px solid black",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Grid item xs={10} md={6} sx={{ border: "1px solid black" }}>
            <HandleData />
          </Grid>
          <Grid item xs={10} md={6} sx={{ border: "1px solid black" }}>
            <HandleUser />
          </Grid>
          <Grid item xs={10} md={12} sx={{ border: "1px solid black" }}>
            <InvitedUser />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
