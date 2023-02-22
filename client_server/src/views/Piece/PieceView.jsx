import { Box, Grid } from "@mui/material";
import InternalHeader from "../../components/InternalHeader";

export default function PieceView() {
  return (
    <>
      <Box>
        <Grid container>
          <InternalHeader text=" Crea tus prendas de ropa" />
          <Grid
            container
            direction="row"
            maxHeight={"100%"}
            sx={{ border: "1px solid black" }}
          >
            <Grid item md={9}>
              aquí se renderizan las piezas elegidas{" "}
            </Grid>
            <Grid item md={3}>
              a la drch un panel para elegir los atributos{" "}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
