import PersonIcon from "@mui/icons-material/Person";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

export const navigate = [
  {
    value: "Mi perfil",
    path: "/u/profile",
    icon: <PersonIcon sx={{ fontSize: "24px", color: "common.white" }} />,
  },

  {
    value: "Colecciones",
    path: "/u/collections",
    icon: (
      <CollectionsBookmarkIcon
        sx={{ fontSize: "24px", color: "common.white" }}
      />
    ),
  },
  {
    value: "Prendas",
    path: "/u/piece",
    icon: <CheckroomIcon sx={{ fontSize: "24px", color: "common.white" }} />,
  },
  {
    value: "Recursos gráficos",
    path: "/u/grafic-resources",
    icon: <ImageSearchIcon sx={{ fontSize: "24px", color: "common.white" }} />,
  },
  {
    value: "Modelo 3D",
    path: "/u/patterns",
    icon: (
      <ThreeDRotationIcon sx={{ fontSize: "24px", color: "common.white" }} />
    ),
  },
];
