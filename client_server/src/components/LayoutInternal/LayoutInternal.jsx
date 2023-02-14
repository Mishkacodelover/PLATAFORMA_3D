import SideBar from "../SideBar/SideBar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Grid container direcion={"row"}>
        <SideBar />
        <Outlet />
      </Grid>
    </>
  );
}
