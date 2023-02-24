import { Box, Grid } from "@mui/material";

import InternalHeader from "../../components/InternalHeader/InternalHeader";
import HandleUser from "../../components/HandleUser";
import HandleData from "../../components/HandleData/HandleData";

export default function AdminDashboardView({
  registerMember,
  handleCloseRegister,
  handleOpenRegister,
  openRegister,
  values,
  handleChange,
  errors,
  isSubmitting,
  handleSubmit,
  allUser,
  deleteUser,
  handleOpenEditUser,
  handleCloseEditUser,
  handleInputData,
  handleClickOpen,
  handleClose,
  open,
  openEditUser,
  userEditing,
  updateUser,
}) {
  return (
    <Box>
      <Grid container maxWidth={"100%"} sx={{ maxHeight: "100%" }}>
        <InternalHeader text="Panel de administador" />
        <Grid
          container
          sx={{
            border: "1px solid black",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Grid item xs={10} md={6} sx={{ border: "1px solid black" }}>
            <HandleData
              registerMember={registerMember}
              handleCloseRegister={handleCloseRegister}
              handleOpenRegister={handleOpenRegister}
              openRegister={openRegister}
              values={values}
              handleChange={handleChange}
              errors={errors}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={10} md={6} sx={{ border: "1px solid black" }}>
            <HandleUser
              allUser={allUser}
              deleteUser={deleteUser}
              handleOpenEditUser={handleOpenEditUser}
              handleCloseEditUser={handleCloseEditUser}
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
              handleInputData={handleInputData}
              open={open}
              openEditUser={openEditUser}
              updateUser={updateUser}
              userEditing={userEditing}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
