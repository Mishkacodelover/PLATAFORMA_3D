import SideBar from "../SideBar/SideBar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Grid container direcion={"row"} sx={{ maxWidth: "100%" }}>
        <Grid item md={2} xs={12}>
          <SideBar />
        </Grid>
        <Grid item md={10} xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
