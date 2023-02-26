import { Grid, Typography } from "@mui/material";

export default function Welcome() {
  return (
    <>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "flex-start",
          p: "24px",
          maxWidth: "100%",
        }}
      >
        <Typography
          variant="h4"
          color="secondary.dark"
          sx={{
            paddingLeft: "16px",
            paddingBottom: "16px",
            paddingTop: "8px",
          }}
        >
          Descubre cómo utilizar nuestra plataforma para sacarle el máximo
          partido
        </Typography>
        <Typography sx={{ p: "16px", textAlign: "left" }}>
          Con tan solo tres pasos podrás empezar a crear tu propia colección de
          ropa
        </Typography>
        <Typography sx={{ p: "16px", textAlign: "left" }}>
          Diseña prendas en 3d a partir de tus fotos
        </Typography>
      </Grid>
    </>
  );
}
