import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";

const UserContext = createContext({
  user: {
    email: "",
    name: "",
    surname: "",
    id: "",
    role: "",
    isDelete: "",
  },
});

export default UserContext;

export function UserContextProvider({ children }) {
  const { authorization } = useAuthContext();
  const [user, setUser] = useState();

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

  const value = {
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
