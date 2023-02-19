import HandleUserView from "./HandleUserView";
import { useState } from "react";

export default function HandleUser() {
  const [openEditUser, setOpenEditUser] = useState(false);

  const handleOpenEditUser = () => setOpenEditUser(true);
  const handleCloseEditUser = () => setOpenEditUser(false);

  return (
    <HandleUserView
      openEditUser={openEditUser}
      handleOpenEditUser={handleOpenEditUser}
      handleCloseEditUser={handleCloseEditUser}
    />
  );
}
