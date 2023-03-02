import * as React from "react";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import {
  Box,
  Button,
  Grid,
  InputBase,
  Typography,
  Avatar,
} from "@mui/material";

export default function ProfileImageView({
  onFileChange,
  uploadImage,
  avatar,
}) {
  return (
    <Box sx={{ p: "24px" }}>
      <Grid
        container
        alignItems={"center"}
        justifyContent="center"
        sx={{ paddingTop: "34px" }}
      >
        <Grid
          container
          directin="row"
          alignItems={"center"}
          sx={{
            p: "16px",
            backgroundColor: "primary.main",
          }}
        >
          <Typography color="common.white" variant="h6">
            Elige una foto de perfil
          </Typography>
          <PhotoCamera
            sx={{ fontSize: "24px", color: "common.white", marginLeft: "16px" }}
          />
          <Grid item>
            {avatar ? (
              <Avatar sx={{ marginLeft: "24px" }}>
                <img
                  src={`http://localhost:8000/${avatar.path}`}
                  alt={avatar.name}
                  width="48px"
                />
              </Avatar>
            ) : (
              <Avatar sx={{ marginLeft: "24px" }}>
                <PersonOutlineIcon
                  sx={{ color: "common.white", fontSize: "24px" }}
                />
              </Avatar>
            )}
          </Grid>
        </Grid>
        <Box
          sx={{
            padding: "18px 16px 16px 16px",
            backgroundColor: "primary.main",
          }}
        >
          <form onSubmit={uploadImage}>
            <InputBase
              accept="image/*"
              multiple
              type="file"
              value={undefined}
              onChange={onFileChange}
              sx={{
                backgroundColor: "primary.main",
                color: "common.white",
                borderRadius: "4px",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "secondary.light", marginTop: "16px" }}
            >
              Subir imagen
            </Button>
          </form>
        </Box>
      </Grid>
    </Box>
  );
}
