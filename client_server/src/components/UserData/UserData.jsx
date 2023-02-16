import UserDataView from "./UserDataView";

import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function UserData() {
  const { authorization } = useAuthContext();
  const [user, setUser] = useState(null);
  const [name, setName] = useState(false);
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
  });

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/user/${authorization.id}`
        );
        const data = await response.json();
        setUser(data);
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
          //   Authorization: authorization.token,
        },
        body: JSON.stringify(input),
      }
    );
    try {
      if (response.ok) {
        setName(false);
        setInput({ name: "", surname: "", email: "" });
        const user = await response.json();
        if (user) {
          setUser(user);
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
        user={user}
        name={name}
        setName={setName}
        input={input}
        setInput={setInput}
        update={update}
      />
    </>
  );
}
