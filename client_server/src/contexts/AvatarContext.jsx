import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";

const AvatarContext = createContext({
  newAvatar: () => {},
});

export default AvatarContext;

export function AvatarContextProvider({ children }) {
  const [avatar, setAvatar] = useState(null);
  const { authorization } = useAuthContext();

  const newAvatar = useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:8000/images/avatar/${authorization.id}`
        );
        const data = await response.json();
        setAvatar(data);
      }
      fetchData();
    },
    [authorization.id]
  );

  const value = {
    newAvatar,
    avatar,
  };

  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  );
}

export function useAvatarContext() {
  return useContext(AvatarContext);
}
