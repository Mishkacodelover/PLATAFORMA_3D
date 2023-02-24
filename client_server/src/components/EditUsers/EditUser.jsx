import EditUserView from "./EditUserView";

export default function EditUser({ user, handleInputData, updateUser }) {
  // function handleInputData(event) {
  //   setUserEditing({
  //     ...user,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // async function updateUser(event, user) {
  //   event.preventDefault();
  //   const response = await fetch(`http://localhost:8000/user/${user.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   });
  //   try {
  //     if (response.ok) {
  //       handleCloseEditUser();

  //       const editList = await response.json();
  //       if (editList) {
  //         const userIndexToUpdate = allUser.findIndex(
  //           (userToEdit) => userToEdit.id === user.id
  //         );
  //         const newUserList = [...allUser];
  //         newUserList[userIndexToUpdate] = editList;
  //         setAllUser(newUserList);
  //       }
  //     } else {
  //       console.log("error al editar valor");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <EditUserView
        inputData={user}
        handleInputData={handleInputData}
        updateUser={updateUser}
      />
      ;
    </>
  );
}
