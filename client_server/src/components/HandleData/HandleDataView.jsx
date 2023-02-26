import {
  Typography,
  Box,
  Grid,
  Button,
  Modal,
  Fade,
  Backdrop,
  Switch,
} from "@mui/material";

import FiscalData from "../FiscalData/FiscalData";
import InviteMember from "../InviteMember";
import { style } from "../../const/modalStyle";

export default function HandleDataView({
  checked,
  handleCheck,

  handleOpenRegister,
  openRegister,
  handleCloseRegister,
  handleSubmit,
  values,
  handleChange,
  errors,
  isSubmitting,
}) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Grid
          container
          direction={"column"}
          spacing={2}
          sx={{ maxWidth: "100%", justifyItems: "left" }}
        >
          <Grid
            item
            container
            direction={"row"}
            alignItems="center"
            spacing={1}
            // sx={{ paddingTop: "16px" }}
          >
            <Typography
              variant="h6"
              color="secondary.dark"
              sx={{
                textTransform: "uppercase",

                paddingLeft: "36px",
              }}
            >
              Datos fiscales y suscripción
            </Typography>
            <Switch
              checked={checked}
              onChange={handleCheck}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={handleOpenRegister}
              variant="contained"
              sx={{ backgroundColor: "primary.main", marginLeft: "24px" }}
            >
              Invitar usuarios
            </Button>

            <Modal
              aria-labelledby="open-registration-form"
              aria-describedby="open-registration-form"
              open={openRegister}
              onClose={handleCloseRegister}
              closeAfterTransition
              slots={Backdrop}
              slotsProps={{
                timeout: 500,
              }}
            >
              <Fade in={openRegister}>
                <Box sx={style}>
                  <InviteMember
                    handleSubmit={handleSubmit}
                    values={values}
                    handleChange={handleChange}
                    errors={errors}
                    isSubmitting={isSubmitting}
                  />
                </Box>
              </Fade>
            </Modal>
          </Grid>

          <Box sx={{ paddingTop: "36px" }}>
            {checked ? (
              checked && <FiscalData />
            ) : (
              <>
                <Typography
                  variant="h5"
                  textAlign="center"
                  color="secondary.dark"
                  sx={{ p: "8px", marginTop: "44px" }}
                >
                  Gestiona tus datos fiscales y de suscripción
                </Typography>
                <Typography
                  variant="h5"
                  textAlign="center"
                  color="secondary.dark"
                  sx={{ p: "8px" }}
                >
                  Invita a los miembros del equipo que necesites
                </Typography>
                <Typography
                  variant="h6"
                  textAlign="center"
                  color="secondary.dark"
                  sx={{ p: "8px" }}
                >
                  Asigna roles, según el tipo de trabajo que realicen
                </Typography>
                <Typography
                  variant="h6"
                  textAlign="center"
                  color="secondary.dark"
                  sx={{ p: "8px" }}
                >
                  Edita y elimina datos personales
                </Typography>
              </>
            )}
          </Box>
        </Grid>
      </Box>
    </>
  );
}
