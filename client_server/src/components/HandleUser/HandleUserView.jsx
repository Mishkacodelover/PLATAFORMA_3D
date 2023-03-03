import {
  Box,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  Avatar,
  IconButton,
  Tooltip,
  ListItemAvatar,
  ListItemButton,
  Button,
  ListItemText,
  Grid,
  Modal,
  Fade,
  Backdrop,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import Search from "../Search/Search";
import EditUser from "../EditUsers";
import { style } from "../../const/modalStyle";

export default function HandleUserView({
  allUser,
  deleteUser,
  handleOpenEditUser,
  handleCloseEditUser,
  handleInputData,
  handleClickOpen,
  handleClose,
  open,
  openEditUser,
  userEditing,
  updateUser,
}) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Grid
          container
          direction="column"
          alignItems={"flex-start"}
          spacing={2}
          width="100%"
        >
          <Grid item md={12}>
            <Typography
              sx={{ textTransform: "uppercase" }}
              variant="h6"
              color="secondary.dark"
            >
              Mis Usuarios
            </Typography>
          </Grid>
          <Grid item md={12} sx={{ paddingBottom: "36px", width: "100%" }}>
            <Search />
          </Grid>

          <List
            sx={{
              maxHeight: "216px",
              overflow: "auto",
              width: "100%",
              paddingTop: "24px",
            }}
          >
            {allUser ? (
              allUser.map((user) => (
                <ListItem
                  key={user.id}
                  sx={{
                    boxShadow: "2px 2px 2px 1px var(--primario_oscuro)",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "primary.main" }}>
                      <PersonIcon
                        sx={{ color: "primary.light", fontSize: "24px" }}
                      />
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText primary={user.email} />

                  <ListItemButton sx={{ justifyContent: "flex-end" }}>
                    <Button
                      onClick={() => handleOpenEditUser(user.id)}
                      variant="outlined"
                      sx={{ border: "2px solid" }}
                    >
                      Editar
                    </Button>
                  </ListItemButton>

                  <Modal
                    aria-labelledby="open-edirUser-form"
                    aria-describedby="open-editUser-form"
                    open={openEditUser}
                    onClose={handleCloseEditUser}
                    closeAfterTransition
                    slots={Backdrop}
                    slotsProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openEditUser}>
                      <Box sx={style}>
                        <EditUser
                          handleInputData={handleInputData}
                          updateUser={updateUser}
                          user={userEditing}
                        />
                      </Box>
                    </Fade>
                  </Modal>

                  <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                    <IconButton onClick={() => handleClickOpen(user.id)}>
                      <Tooltip title="Eliminar">
                        <DeleteIcon
                          sx={{ fontSize: "24px", color: "secondary.light" }}
                        />
                      </Tooltip>
                    </IconButton>
                  </ListItemIcon>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"¿Está seguro de que quiere eliminar al usuario?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Al aceptar, el usuario seleccionado será eliminado de la
                        lista.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancelar</Button>
                      <Button onClick={() => deleteUser(user.id)} autoFocus>
                        Aceptar
                      </Button>
                    </DialogActions>
                  </Dialog>
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No tienes usuarios invitados" />
              </ListItem>
            )}
          </List>
        </Grid>
      </Box>
    </>
  );
}
