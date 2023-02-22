import { Grid, Typography, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function InternalHeaderView({ text, user }) {
  return (
    <>
      <Grid
        container
        direction={"row"}
        spacing={2}
        sx={{
          alignItems: "center",
          maxWdth: "100%",
          p: "16px",
          justifyContent: "flex-end",
        }}
      >
        <Grid item sx={{ paddingRight: "724px" }}>
          <Typography>{text}</Typography>
        </Grid>

        <Grid item>
          <Typography>Bienvenido </Typography>
        </Grid>
        <Grid item>
          <Avatar sx={{ bgcolor: grey[800] }}>H</Avatar>
        </Grid>
      </Grid>
    </>
  );
}
