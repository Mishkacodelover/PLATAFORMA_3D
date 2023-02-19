import UserDataView from "./UserDataView";

import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
// import { useUserContext } from "../../contexts/UserContext";

const userObj = {
  name: "",
  surname: "",
  email: "",
};

export default function UserData() {
  const { authorization } = useAuthContext();
  // const { user } = useUserContext();
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState(false);
  const [surname, setSurname] = useState(false);
  const [email, setEmail] = useState(false);
  const [input, setInput] = useState(userObj);

  function handleInput(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/user/${authorization.id}`
        );
        const data = await response.json();
        setUserData(data);
      }
      fetchData();
    },
    [authorization.id]
  );

  async function update(event, input) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:8000/user/${authorization.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      }
    );
    try {
      if (response.ok) {
        setInput(userObj);

        if (input.name) {
          setName(false);
        } else if (input.surname) {
          setSurname(false);
        } else if (input.email) {
          setEmail(false);
        }

        const userEdited = await response.json();
        if (userEdited) {
          setUserData(userEdited);
        }
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <UserDataView
        userData={userData}
        name={name}
        setName={setName}
        input={input}
        setInput={setInput}
        update={update}
        handleInput={handleInput}
        email={email}
        setEmail={setEmail}
        surname={surname}
        setSurname={setSurname}
      />
    </>
  );
}
