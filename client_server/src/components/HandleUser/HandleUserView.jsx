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
  openEditUser,
  handleOpenEditUser,
  handleCloseEditUser,
  allUser,
  setAllUser,

  value,
  deleteUser,
  handleClickOpen,
  handleClose,
  open,
  setUserEditing,
  userEditing,
}) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Grid
          container
          direction="column"
          alignItems={"flex-start"}
          spacing={2}
          maxWidth="100%"
        >
          <Grid item md={12}>
            <Typography sx={{ textTransform: "uppercase", fontSize: "14px" }}>
              Mis Usuarios
            </Typography>
          </Grid>
          <Grid item md={12} sx={{ paddingBottom: "24px" }}>
            <Search />
          </Grid>

          <List sx={{ maxHeight: "216px", overflow: "auto" }}>
            {allUser ? (
              allUser.map((user) => (
                <ListItem key={user.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText primary={user.email} />

                  <ListItemButton sx={{ justifyContent: "flex-end" }}>
                    <Button onClick={() => handleOpenEditUser(user.id)}>
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
                          allUser={allUser}
                          setAllUser={setAllUser}
                          setUserEditing={setUserEditing}
                          user={userEditing}
                          handleCloseEditUser={handleCloseEditUser}
                        />
                      </Box>
                    </Fade>
                  </Modal>

                  <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                    <IconButton onClick={() => handleClickOpen(user.id)}>
                      <Tooltip title="Eliminar">
                        <DeleteIcon />
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
                      {"¿Está seguro de que quiere eliminar al usuario"}
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
