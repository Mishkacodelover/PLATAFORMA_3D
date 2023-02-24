import EditUserView from "./EditUserView";

export default function EditUser({ user, handleInputData, updateUser }) {
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
