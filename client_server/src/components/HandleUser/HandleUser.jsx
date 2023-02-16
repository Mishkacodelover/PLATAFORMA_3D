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

const options = [
  {
    value: "administrar",
    label: "administrar",
  },
  {
    value: "cambiar rol",
    label: "cambiar rol",
  },
];

export default function HandleUser() {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Typography>Usuarios de alta:</Typography>

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
            <ListItem>
              <TextField
                select
                defaultValue="administrar"
                variant="standard"
                size="small"
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </ListItem>

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
