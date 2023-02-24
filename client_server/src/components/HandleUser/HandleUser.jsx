import HandleUserView from "./HandleUserView";
// import { useState, useEffect } from "react";

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
  // const [openEditUser, setOpenEditUser] = useState(false);
  // const [allUser, setAllUser] = useState(null);
  // const [value, setValue] = useState({ isDelete: false });
  // const [userEditing, setUserEditing] = useState(null);

  // const [open, setOpen] = useState(false);

  // const handleClickOpen = (id) => {
  //   setOpen(true);
  //   setUserEditing(allUser.find((item) => item.id === id));
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpenEditUser = (id) => {
  //   setOpenEditUser(true);
  //   setUserEditing(allUser.find((item) => item.id === id));
  // };

  // const handleCloseEditUser = () => setOpenEditUser(false);

  // useEffect(function () {
  //   async function fetchData() {
  //     const response = await fetch(`http://localhost:8000/user/all-users`);
  //     const data = await response.json();
  //     setAllUser(data);
  //   }
  //   fetchData();
  // }, []);

  // async function deleteUser(id) {
  //   const response = await fetch(`http://localhost:8000/user/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(value),
  //   });
  //   try {
  //     if (response.ok) {
  //       console.log(response);
  //       handleClose();

  //       const editList = await response.json();
  //       if (editList) {
  //         setAllUser(editList);
  //       }
  //       setAllUser(null);
  //     } else {
  //       console.log("error al eliminar usuario");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
