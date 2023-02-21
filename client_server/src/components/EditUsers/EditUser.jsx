import EditUserView from "./EditUserView";

import { useState } from "react";

const obj = {
  name: "",
  surname: "",
  email: "",
  password: "",
  role: "",
};

export default function EditUser({ id }) {
  const [inputData, setInputData] = useState(obj);

  function handleInputData(event) {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  }

  async function updateUser(event, inputData) {
    event.preventDefault();
    const response = await fetch(`http://localhost:8000/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });
    try {
      if (response.ok) {
        setInputData(obj);
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <EditUserView
        inputData={inputData}
        handleInputData={handleInputData}
        updateUser={updateUser}
      />
      ;
    </>
  );
}
