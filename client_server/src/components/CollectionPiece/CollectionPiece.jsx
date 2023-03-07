import { styled } from "@mui/material/styles";

import { useState } from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Tooltip,
  Grid,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PieceCard({ collectionId }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid
        container
        sx={{ p: "24px", maxWidth: "100%" }}
        spacing={2}
        justifyContent="center"
      >
        {collectionId ? (
          collectionId.map((item) => (
            <Grid item sx={{ height: "194px" }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title={item.clotheName}
                  subheader={`Colección: ${item.collectionName}`}
                  sx={{ color: "secondary.main" }}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={`http://localhost:8000/${item.path}`}
                  alt="resource"
                />
                <CardContent>
                  <Typography variant="body2">Ver características:</Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Tooltip title="Eliminar" arrow>
                    <IconButton aria-label="add to favorites">
                      <DeleteIcon sx={{ color: "secondary.main" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Editar" arrow>
                    <IconButton aria-label="share">
                      <EditIcon sx={{ color: "primary.dark" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Enviar a producción" arrow>
                    <IconButton>
                      <DoneOutlineIcon sx={{ color: "secondary.main" }} />
                    </IconButton>
                  </Tooltip>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Tela: {item.fabric}</Typography>
                    <Typography paragraph>Talla: {item.size}</Typography>
                    <Typography paragraph>Color: {item.color}</Typography>
                    <Typography paragraph>
                      Modelo 3d elegido: {item.patternName}
                    </Typography>
                    <Typography paragraph>
                      Recurso gráfico: {item.name}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h5" sx={{ paddingLeft: "24px" }}>
            Todavía no tienes prendas creadas
          </Typography>
        )}
      </Grid>
    </>
  );
}
