import * as React from "react";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import { Box, Button, Grid, Typography } from "@mui/material";

export default function ProfileImageView({ onFileChange, uploadImage }) {
  return (
    <Box sx={{ p: "24px" }}>
      <Grid
        container
        direction="column"
        alignItems={"center"}
        spacing={6}
        justifyContent="center"
      >
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <Typography>Sube tu foto o elige un avatar</Typography>
          </Grid>
          <Grid item>
            <PhotoCamera color="primary" />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" component="label" onClick={uploadImage}>
            Sube tu foto
            <input
              accept="image/*"
              multiple
              type="file"
              onChange={onFileChange}
            />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
