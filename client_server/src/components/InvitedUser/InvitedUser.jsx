import InvitedUserView from "./InvitedUserView";
import { useEffect, useState } from "react";

export default function InvitedUser() {
  const [lastUser, setLastUser] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/user/last-users");
      const data = await response.json();
      setLastUser(data);
    }
    fetchData();
  }, []);

  async function updateInvitedUser(user) {
    // event.preventDefault();
    const response = await fetch(`http://localhost:8000/user/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    try {
      if (response.ok) {
        console.log(response);
        const editList = await response.json();
        if (editList) {
          const userIndexToUpdate = lastUser.findIndex(
            (userToEdit) => userToEdit.id === user.id
          );
          const newUserList = [...lastUser];
          newUserList[userIndexToUpdate] = editList;
          setLastUser(newUserList);
        }
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <InvitedUserView
      lastUser={lastUser}
      setLastUser={setLastUser}
      updateInvitedUser={updateInvitedUser}
    />
  );
}
