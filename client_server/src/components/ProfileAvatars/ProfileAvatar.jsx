import { Avatar, Grid, Typography, Tooltip } from "@mui/material";

import womanImg from "../../assets/images/avatar_moda.jpg";
import manImg from "../../assets/images/hombre.jpg";
import hatImg from "../../assets/images/sombrer.jpg";
import dressImg from "../../assets/images/vestido.jpg";

export default function ProfileAvatar() {
  return (
    <>
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "center", p: "24px" }}
      >
        <Grid item md={6} sx={{ p: "8px" }}>
          <Tooltip title="seleccionar">
            <Avatar sx={{ width: "70px", height: "70px" }}>
              <img alt="icono mujer moda" src={womanImg} width="108px" />
            </Avatar>
          </Tooltip>
          <Typography>Avatar moda</Typography>
        </Grid>
        <Grid item md={6} sx={{ p: "8px" }}>
          <Avatar sx={{ width: "70px", height: "70px" }}>
            <img alt="icono hombre moda" src={manImg} width="80px" />
          </Avatar>
          <Typography>Elige avatar</Typography>
        </Grid>
        <Grid item md={6} sx={{ p: "8px" }}>
          <Avatar sx={{ width: "70px", height: "70px" }}>
            <img alt="icono sombrero moda" src={hatImg} width="96px" />
          </Avatar>
          <Typography>Elige avatar</Typography>
        </Grid>
        <Grid item md={6} sx={{ p: "8px" }}>
          <Avatar sx={{ width: "70px", height: "70px" }}>
            <img alt="icono vestido moda" src={dressImg} width="96px" />
          </Avatar>
          <Typography>Elige avatar</Typography>
        </Grid>
      </Grid>
    </>
  );
}
