import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function CompleteDataView() {
  //   function handleInput(event) {
  //     setInput(event.targe.value);
  //   }
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Typography>Completa tu perfil</Typography>
        <List>
          <ListItem>
            <Typography variant="inherit" color="black">
              Tus redes sociales
            </Typography>

            <ListItemIcon sx={{ justifyContent: "flex-end" }}>
              <IconButton edge="end" aria-label="delete">
                <Tooltip title="Añadir">
                  <AddCircleIcon />
                </Tooltip>
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
