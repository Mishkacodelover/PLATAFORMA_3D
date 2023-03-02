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
  pattern,
  patternChecked,
  handlePattern,
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
      {pattern ? (
        pattern.map((item) => (
          <>
            <ListItem key={item.id}>
              <ListItemButton
                role={undefined}
                onClick={handlePattern(item.id)}
                sx={{ p: "24px" }}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="end"
                    checked={patternChecked === item.id}
                    tabIndex={-1}
                  />
                </ListItemIcon>
                <ListItemAvatar>
                  <Avatar
                    alt={item.patternName}
                    src={`http://localhost:8000/${item.pathPattern}`}
                    widht="70px"
                  />
                </ListItemAvatar>
              </ListItemButton>
            </ListItem>
          </>
        ))
      ) : (
        <>
          <ListItem>
            <Typography>No hay todavía modelos 3d</Typography>
          </ListItem>
        </>
      )}
    </List>
  );
}
