import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  IconButton,
  Tooltip,
  TextField,
  Box,
} from "@mui/material";

import UpdateIcon from "@mui/icons-material/Update";
import SendIcon from "@mui/icons-material/Send";

export default function UserDataView({
  user,
  name,
  setName,
  input,
  setInput,
  update,
}) {
  function handleInput(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Typography>Estos son tus datos de usuario:</Typography>

        {user ? (
          <List>
            <ListItem>
              <Typography variant="inherit" color="black">
                Nombre: {user.name}
              </Typography>

              <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                <IconButton edge="end" aria-label="delete">
                  <Tooltip title="Editar">
                    <UpdateIcon onClick={() => setName(true)} />
                  </Tooltip>
                </IconButton>
              </ListItemIcon>
            </ListItem>
            {name && (
              <form onSubmit={(event) => update(event, input)}>
                <TextField
                  label="escribe tu nombre"
                  name="name"
                  value={input.name}
                  onChange={handleInput}
                />
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            )}
            <ListItem>
              <Typography variant="inherit" color="black">
                Apellidos: {user.surname}
              </Typography>
              <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                <IconButton edge="end" aria-label="delete">
                  <Tooltip title="Editar">
                    <UpdateIcon />
                  </Tooltip>
                </IconButton>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <Typography variant="inherit" color="black">
                Email: {user.email}
              </Typography>
              <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                <IconButton edge="end" aria-label="black">
                  <Tooltip title="Editar">
                    <UpdateIcon />
                  </Tooltip>
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </List>
        ) : (
          <Typography>No hay datos de usuario</Typography>
        )}
      </Box>
    </>
  );
}
