import HandleUserView from "./HandleUserView";

export default function HandleUser({
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
  handleToggleCircle,
}) {
  return (
    <HandleUserView
      allUser={allUser}
      deleteUser={deleteUser}
      handleOpenEditUser={handleOpenEditUser}
      handleCloseEditUser={handleCloseEditUser}
      handleClose={handleClose}
      handleClickOpen={handleClickOpen}
      handleInputData={handleInputData}
      handleToggleCircle={handleToggleCircle}
      open={open}
      openEditUser={openEditUser}
      updateUser={updateUser}
      userEditing={userEditing}
    />
  );
}
