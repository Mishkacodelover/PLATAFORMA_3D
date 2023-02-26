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

import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function UserDataView({
  userData,
  name,

  input,
  handleInput,
  update,
  email,
  surname,
  handleName,
  handleSurname,
  handleEmail,
}) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Typography
          variant="h6"
          color="secondary.dark"
          sx={{ paddingLeft: "16px" }}
        >
          Estos son tus datos de usuario:
        </Typography>

        {userData ? (
          <List>
            <ListItem
              sx={{
                backgroundColor: "secondary.light",
              }}
            >
              <ListItemText
                primary={`Nombre:  ${userData.name}`}
                sx={{ color: "common.white" }}
              />

              {name && (
                <form onSubmit={(event) => update(event, input)}>
                  <TextField
                    size="small"
                    label="Escribe tu nombre"
                    name="name"
                    value={input.name}
                    onChange={handleInput}
                    sx={{
                      marginLeft: "16px",
                      backgroundColor: "common.white",
                      borderRadius: "4px",
                    }}
                  />
                  <Tooltip title="enviar" arrow>
                    <IconButton type="submit">
                      <TaskAltIcon
                        sx={{ color: "common.white", fontSize: "24px" }}
                      />
                    </IconButton>
                  </Tooltip>
                </form>
              )}

              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  onClick={handleName}
                  variant="contained"
                  sx={{ backgroundColor: "primary.dark" }}
                >
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>

            <ListItem
              sx={{
                backgroundColor: "primary.dark",
              }}
            >
              <ListItemText
                primary={`Apellidos:  ${userData.surname}`}
                sx={{ color: "common.white" }}
              />

              {surname && (
                <form onSubmit={(event) => update(event, input)}>
                  <TextField
                    size="small"
                    label="Escribe tus apellidos"
                    name="surname"
                    value={input.surname}
                    onChange={handleInput}
                    sx={{
                      marginLeft: "16px",
                      backgroundColor: "common.white",
                      borderRadius: "4px",
                    }}
                  />
                  <Tooltip title="enviar" arrow>
                    <IconButton type="submit">
                      <TaskAltIcon
                        sx={{ color: "common.white", fontSize: "24px" }}
                      />
                    </IconButton>
                  </Tooltip>
                </form>
              )}
              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  onClick={handleSurname}
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary.light",
                  }}
                >
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: "secondary.light",
              }}
            >
              <ListItemText
                primary={`Email:  ${userData.email}`}
                sx={{ color: "common.white" }}
              />

              {email && (
                <form onSubmit={(event) => update(event, input)}>
                  <TextField
                    size="small"
                    label="Escribe tu email"
                    name="email"
                    value={input.email}
                    onChange={handleInput}
                    sx={{
                      marginLeft: "16px",
                      backgroundColor: "common.white",
                      borderRadius: "4px",
                    }}
                  />
                  <Tooltip title="enviar" arrow>
                    <IconButton type="submit">
                      <TaskAltIcon
                        sx={{ color: "common.white", fontSize: "24px" }}
                      />
                    </IconButton>
                  </Tooltip>
                </form>
              )}
              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  onClick={handleEmail}
                  variant="contained"
                  sx={{
                    backgroundColor: "primary.dark",
                  }}
                >
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
