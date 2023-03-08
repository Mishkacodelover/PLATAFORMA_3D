import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";

const AvatarContext = createContext({
  newAvatar: () => {},
  uploadImage: () => {},
  onFileChange: () => {},
});

export default AvatarContext;

export function AvatarContextProvider({ children }) {
  const [avatar, setAvatar] = useState(null);
  const { authorization } = useAuthContext();
  const formData = new FormData();

  function onFileChange(e) {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
      formData.append("userCreated", authorization.id);
    }
  }

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

  async function uploadImage(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/images/upload/avatar",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const newAvatar = await response.json();
        // const name = newAvatar.find((item) => item.name === avatar.name);
        if (newAvatar) {
          setAvatar(newAvatar);
        }
      } else {
        console.log("error en el registro");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    newAvatar,
    avatar,
    uploadImage,
    onFileChange,
  };

  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  );
}

export function useAvatarContext() {
  return useContext(AvatarContext);
}
