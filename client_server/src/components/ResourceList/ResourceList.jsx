import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemIcon,
  Checkbox,
  Avatar,
  Typography,
} from "@mui/material";

export default function PatternList({
  resource,
  resourceChecked,
  handleResource,
}) {
  return (
    <List
      dense
      sx={{
        maxWidth: "100%",
        bgcolor: "background.paper",
        overflow: "auto",
        display: "flex",
        flexDirection: "row",
        padding: 0,
      }}
    >
      {resource ? (
        resource.map((item) => (
          <ListItem key={item.id}>
            <ListItemButton
              role={undefined}
              onClick={handleResource(item.id)}
              sx={{ p: "24px" }}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  checked={resourceChecked === item.id}
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src={`http://localhost:8000/${item.path}`}
                  widht="70px"
                />
              </ListItemAvatar>
            </ListItemButton>
          </ListItem>
        ))
      ) : (
        <>
          <ListItem>
            <Typography>No hay todavía imágenes</Typography>
          </ListItem>
        </>
      )}
    </List>
  );
}
