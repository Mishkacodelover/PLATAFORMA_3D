import { Box } from "@mui/material";
import PieceCard from "../../components/PieceCard/PieceCard";

export default function FinalPieceView({ piece }) {
  return (
    <>
      <Box>
        <PieceCard piece={piece} />
      </Box>
    </>
  );
}
