import InvitedUserView from "./InvitedUserView";
import { useEffect, useState } from "react";

export default function InvitedUser() {
  const [lastUser, setLastUser] = useState();
  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch("http://localhost:8000/user/last-users");
        const data = await response.json();
        setLastUser(data);
      }
      fetchData();
    },
    [lastUser]
  );
  return <InvitedUserView lastUser={lastUser} setLastUser={setLastUser} />;
}
