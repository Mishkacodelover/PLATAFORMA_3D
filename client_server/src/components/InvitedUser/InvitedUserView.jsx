import {
  Box,
  Typography,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemButton,
  Button,
  ListItemText,
  List,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function InvitedUserView({
  lastUser,
  setLastUser,
  updateInvitedUser,
}) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Typography>Invitaciones pendientes de aceptar:</Typography>
        <List>
          {lastUser ? (
            lastUser.map((user) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.email} />

                <ListItemButton sx={{ justifyContent: "flex-end" }}>
                  <Button
                    size="small"
                    onClick={() => updateInvitedUser(user.id)}
                  >
                    Cancelar invitación
                  </Button>
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <Typography>No hay invitaciones pendientes</Typography>
          )}
        </List>
      </Box>
    </>
  );
}
