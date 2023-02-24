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
      open={open}
      openEditUser={openEditUser}
      updateUser={updateUser}
      userEditing={userEditing}
    />
  );
}
