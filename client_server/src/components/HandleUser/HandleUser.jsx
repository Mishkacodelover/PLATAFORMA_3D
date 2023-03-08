import HandleUserView from "./HandleUserView";

export default function HandleUser({
  allUser,
  deleteUser,
  handleOpenEditUser,
  handleCloseEditUser,
  handleInputData,
  handleClickOpen,
  handleClose,
  handleToggleCircleEdit,
  open,
  openCircle,
  openCircleEdit,
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
      handleToggleCircleEdit={handleToggleCircleEdit}
      open={open}
      openCircle={openCircle}
      openCircleEdit={openCircleEdit}
      openEditUser={openEditUser}
      updateUser={updateUser}
      userEditing={userEditing}
    />
  );
}
