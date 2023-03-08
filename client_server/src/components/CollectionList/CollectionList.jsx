import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

export default function CollectionList({
  collection,
  collectionChecked,
  handleCollection,
}) {
  return (
    <List
      dense
      orientation="horizontal"
      sx={{
        maxWidth: "100%",
        bgcolor: "background.paper",
        overflow: "auto",
        display: "flex",
        flexDirection: "row",
        padding: 0,
      }}
    >
      {collection ? (
        collection.map((item) => (
          <Box
            sx={{
              // backgroundImage:
              //   "radial-gradient(var(--primario_claro),var(--blanco))",
              boxShadow: "0px 0px 1px 4px inset var(--primario_claro)",
            }}
          >
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleCollection(item.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="end"
                    checked={collectionChecked === item.id}
                    tabIndex={-1}
                  />
                </ListItemIcon>
                <ListItemText primary={`Colección: ${item.collectionName}`} />
              </ListItemButton>
            </ListItem>
          </Box>
        ))
      ) : (
        <>
          <ListItem>
            <Typography>No hay todavía colecciones de ropa</Typography>
          </ListItem>
        </>
      )}
    </List>
  );
}
