import { Grid, Typography, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useAuthContext } from "../../contexts/AuthContext";

export default function InternalHeaderView({ text, user }) {
  const { authorization } = useAuthContext();
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
          <Typography>Bienvenid@ {authorization.name} </Typography>
        </Grid>
        <Grid item>
          <Avatar sx={{ bgcolor: grey[800] }}>H</Avatar>
        </Grid>
      </Grid>
    </>
  );
}
