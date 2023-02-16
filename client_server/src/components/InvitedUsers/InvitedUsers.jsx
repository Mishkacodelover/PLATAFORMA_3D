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
  TextField,
  MenuItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";

export default function InvitedUsers() {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <Typography variant="inherit" color="black">
              UserName
            </Typography>

            <ListItemIcon sx={{ justifyContent: "flex-end" }}>
              <IconButton edge="end" aria-label="delete">
                <Tooltip title="Editar">
                  <DeleteIcon />
                </Tooltip>
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
