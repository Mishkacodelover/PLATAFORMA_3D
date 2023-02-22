import HandleUserView from "./HandleUserView";
import { useState, useEffect } from "react";

export default function HandleUser() {
  const [openEditUser, setOpenEditUser] = useState(false);
  const [allUser, setAllUser] = useState(null);
  const [value, setValue] = useState({ isDelete: true });

  // const handleValue = () => setValue({ isDelete: true });
  const handleOpenEditUser = () => setOpenEditUser(true);
  const handleCloseEditUser = () => setOpenEditUser(false);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/user/all-users`);
      const data = await response.json();
      setAllUser(data);
    }
    fetchData();
  }, []);

  async function deleteUser(event, value) {
    event.preventDefault();
    // setValue(true);
    const response = await fetch(`http://localhost:8000/user/${allUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    try {
      if (response.ok) {
        console.log(response);

        const userEdited = await response.json();
        if (userEdited) {
          setAllUser(userEdited);
        }
      } else {
        console.log("error al eliminar usuario");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HandleUserView
      openEditUser={openEditUser}
      handleOpenEditUser={handleOpenEditUser}
      handleCloseEditUser={handleCloseEditUser}
      allUser={allUser}
      value={value}
      deleteUser={deleteUser}
    />
  );
}
