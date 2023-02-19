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

export default function InvitedUserView({ lastUser, setLastUser }) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Typography>Invitaciones pendientes de aceptar:</Typography>
        {lastUser ? (
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={lastUser.email} />

              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button size="small">Cancelar invitación</Button>
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          <Typography>No hay invitaciones pendientes</Typography>
        )}
      </Box>
    </>
  );
}
