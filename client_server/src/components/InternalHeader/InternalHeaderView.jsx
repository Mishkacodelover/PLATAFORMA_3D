import { Grid, Typography, Avatar } from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useAuthContext } from "../../contexts/AuthContext";

export default function InternalHeaderView({ children, avatar }) {
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
        <Grid item>
          <Typography variant="h5" color="secondary.dark">
            Bienvenid@ {authorization.name}{" "}
          </Typography>
        </Grid>
        <Grid item>
          {avatar ? (
            <Avatar>
              <img
                src={`http://localhost:8000/${avatar.path}`}
                alt={avatar.name}
                width="48px"
              />
            </Avatar>
          ) : (
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <PersonOutlineIcon
                sx={{ color: "common.white", fontSize: "24px" }}
              />
            </Avatar>
          )}
        </Grid>
      </Grid>
    </>
  );
}
