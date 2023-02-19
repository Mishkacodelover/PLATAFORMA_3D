import { ImageList, ImageListItem, Typography, Box } from "@mui/material";

export default function GraficResourcesView({ resource }) {
  return (
    <Box sx={{ p: "48px" }}>
      <ImageList
        sx={{ maxWidth: "100%", height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {resource ? (
          resource.map(({ path, name }) => (
            <ImageListItem key={name}>
              <img
                src={`http:/localhost:8000/${path}`}
                srcSet={`http:/localhost:8000/${path}`}
                alt={name}
                loading="lazy"
              />
            </ImageListItem>
          ))
        ) : (
          <Typography>No hay imágenes</Typography>
        )}
      </ImageList>
    </Box>
  );
}
