import * as React from "react";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import { Box, Stack, Button, Typography } from "@mui/material";

export default function ProfileImage() {
  return (
    <Box sx={{ p: "24px" }}>
      <Typography>Sube tu foto o elige un avatar</Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </Stack>
    </Box>
  );
}
