import { Box, Grid } from "@mui/material";
import PieceCard from "../../components/PieceCard/PieceCard";
import InternalHeader from "../../components/InternalHeader";

export default function FinalPieceView({ piece }) {
  return (
    <>
      <Box>
        <Grid container maxWidth={"100%"}>
          <InternalHeader />

          <PieceCard piece={piece} />
        </Grid>
      </Box>
    </>
  );
}
