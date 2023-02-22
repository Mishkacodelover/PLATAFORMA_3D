import InternalHeaderView from "./InernalHeaderView";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";

export default function InternalHeader() {
  const { authorization } = useAuthContext();
  const [user, setUser] = useState(null);

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

  return (
    <>
      <InternalHeaderView user={user} />
    </>
  );
}
