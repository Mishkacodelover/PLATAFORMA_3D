import PersonIcon from "@mui/icons-material/Person";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

export const navigate = [
  {
    value: "Mi perfil",
    path: "/u/profile",
    icon: <PersonIcon />,
  },

  {
    value: "Colecciones",
    path: "/u/collections",
    icon: <CollectionsBookmarkIcon />,
  },
  {
    value: "Prendas",
    path: "/u/piece",
    icon: <CheckroomIcon />,
  },
  {
    value: "Recursos gráficos",
    path: "/u/grafic-resources",
    icon: <ImageSearchIcon />,
  },
  {
    value: "Modelo 3D",
    path: "/u/patterns",
    icon: <ThreeDRotationIcon />,
  },
];
