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

  value,
  deleteUser,
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
              allUser.map(({ email, id }) => (
                <ListItem key={id}>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText primary={email} />

                  <ListItemButton sx={{ justifyContent: "flex-end" }}>
                    <Button size="small" onClick={handleOpenEditUser}>
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
                        <EditUser id={id} />
                      </Box>
                    </Fade>
                  </Modal>

                  <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                    <IconButton
                      type="submit"
                      value={value}
                      onClick={deleteUser}
                    >
                      <Tooltip title="Eliminar">
                        <DeleteIcon />
                      </Tooltip>
                    </IconButton>
                  </ListItemIcon>
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
