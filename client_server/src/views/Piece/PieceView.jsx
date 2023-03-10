import { Box, Grid, Typography, Alert, CircularProgress } from "@mui/material";
import InternalHeader from "../../components/InternalHeader";
import PieceForm from "../../components/PieceForm/PieceForm";

export default function PieceView({
  addPiece,
  addFalsePiece,
  alert,

  collection,
  handlePiece,
  pattern,
  resource,
  patternChecked,
  handlePattern,
  resourceChecked,
  handleResource,
  collectionChecked,
  handleCollection,
  handleOpen,
  open,
}) {
  return (
    <>
      <Box>
        <Grid container>
          <InternalHeader text=" Crea tus prendas de ropa" />
          {alert && <Alert severity="success">¡Prenda creada!</Alert>}
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
            {open && (
              <CircularProgress
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "55%",
                }}
              />
            )}
            <PieceForm
              addPiece={addPiece}
              pattern={pattern}
              resource={resource}
              addFalsePiece={addFalsePiece}
              handlePiece={handlePiece}
              collection={collection}
              patternChecked={patternChecked}
              handlePattern={handlePattern}
              resourceChecked={resourceChecked}
              handleResource={handleResource}
              collectionChecked={collectionChecked}
              handleCollection={handleCollection}
              handleOpen={handleOpen}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
