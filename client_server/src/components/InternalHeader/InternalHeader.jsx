import { Grid, Typography, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function InternalHeader({ sx, text }) {
  return (
    <>
      <Grid
        item
        container
        direction={"row"}
        sx={{
          justifyContent: "flex-end",
          maxWdth: "100%",
          p: "16px",
          alignItems: "center",
        }}
      >
        <Typography sx={sx}>{text}</Typography>
        <Typography sx={{ textAlign: "right", p: "16px" }}>
          Bienvenido userName
        </Typography>
        <Avatar sx={{ bgcolor: grey[800] }}>H</Avatar>
      </Grid>
    </>
  );
}
