import EditUserView from "./EditUserView";

export default function EditUser({
  user,
  handleInputData,
  updateUser,
  handleToggleCircleEdit,
}) {
  return (
    <>
      <EditUserView
        inputData={user}
        handleInputData={handleInputData}
        updateUser={updateUser}
        handleToggleCircleEdit={handleToggleCircleEdit}
      />
      ;
    </>
  );
}
