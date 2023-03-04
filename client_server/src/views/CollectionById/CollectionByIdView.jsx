import { Box, Grid } from "@mui/material";
import InternalHeader from "../../components/InternalHeader";
import CollectionPiece from "../../components/CollectionPiece/CollectionPiece";

export default function CollectionByIdView({ collectionId }) {
  return (
    <>
      <Box>
        <Grid container maxWidth={"100%"}>
          <InternalHeader />

          <CollectionPiece collectionId={collectionId} />
        </Grid>
      </Box>
    </>
  );
}
