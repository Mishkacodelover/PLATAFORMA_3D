import { Box, Grid, Typography } from "@mui/material";
import InternalHeader from "../../components/InternalHeader";
import PieceForm from "../../components/PieceForm/PieceForm";

export default function PieceView({
  addPiece,
  addFalsePiece,
  collection,
  handlePiece,
  pattern,
  resource,
}) {
  return (
    <>
      <Box>
        <Grid container>
          <InternalHeader text=" Crea tus prendas de ropa" />
          <Typography
            variant="h5"
            sx={{ paddingLeft: "36px" }}
            color="common.black"
          >
            Crea una prenda única
          </Typography>
          <Grid
            sx={{
              p: "24px 24px 24px 36px",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          >
            <PieceForm
              addPiece={addPiece}
              pattern={pattern}
              resource={resource}
              addFalsePiece={addFalsePiece}
              handlePiece={handlePiece}
              collection={collection}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
