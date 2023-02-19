import {
  List,
  ListItem,
  Typography,
  IconButton,
  Tooltip,
  TextField,
  Box,
  ListItemButton,
  Button,
  ListItemText,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export default function UserDataView({
  userData,
  name,
  setName,
  input,
  handleInput,
  update,
  email,
  setEmail,
  surname,
  setSurname,
}) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Typography>Estos son tus datos de usuario:</Typography>

        {userData ? (
          <List>
            <ListItem>
              <ListItemText primary={`Nombre:  ${userData.name}`} />

              {name && (
                <form onSubmit={(event) => update(event, input)}>
                  <TextField
                    size="small"
                    label="escribe tu nombre"
                    name="name"
                    value={input.name}
                    onChange={handleInput}
                    sx={{ marginLeft: "24px" }}
                  />
                  <Tooltip title="enviar">
                    <IconButton type="submit">
                      <SendIcon />
                    </IconButton>
                  </Tooltip>
                </form>
              )}

              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button size="small" onClick={() => setName(true)}>
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemText primary={`Apellidos:  ${userData.surname}`} />

              {surname && (
                <form onSubmit={(event) => update(event, input)}>
                  <TextField
                    size="small"
                    label="escribe tus apellidos"
                    name="surname"
                    value={input.surname}
                    onChange={handleInput}
                    sx={{ marginLeft: "24px" }}
                  />
                  <Tooltip title="enviar">
                    <IconButton type="submit">
                      <SendIcon />
                    </IconButton>
                  </Tooltip>
                </form>
              )}
              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button size="small" onClick={() => setSurname(true)}>
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemText primary={`Email:  ${userData.email}`} />

              {email && (
                <form onSubmit={(event) => update(event, input)}>
                  <TextField
                    size="small"
                    label="escribe tu email"
                    name="email"
                    value={input.email}
                    onChange={handleInput}
                    sx={{ marginLeft: "24px" }}
                  />
                  <Tooltip title="enviar">
                    <IconButton type="submit">
                      <SendIcon />
                    </IconButton>
                  </Tooltip>
                </form>
              )}
              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button size="small" onClick={() => setEmail(true)}>
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          <Typography>No hay datos de usuario</Typography>
        )}
      </Box>
    </>
  );
}
