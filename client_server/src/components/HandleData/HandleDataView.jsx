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
          spacing={1}
          sx={{ maxWidth: "100%", justifyItems: "left" }}
        >
          <Grid
            item
            container
            direction={"row"}
            alignItems="center"
            spacing={2}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "14px",
                paddingLeft: "22px",
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
            <Button onClick={handleOpenRegister}>Invitar usuarios</Button>

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

          <Box>{checked && <FiscalData />}</Box>
        </Grid>
      </Box>
    </>
  );
}
