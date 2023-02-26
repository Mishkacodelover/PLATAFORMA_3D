import ProfileView from "./ProfileView";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";

export default function Profile() {
  const { authorization } = useAuthContext();
  const [avatar, setAvatar] = useState();
  const formData = new FormData();

  function onFileChange(e) {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
      formData.append("userCreated", authorization.id);
    }
  }

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
        const name = newAvatar.find((item) => item.name === avatar.name);
        setAvatar(name);
      } else {
        console.log("error en el registro");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
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

  return (
    <ProfileView
      onFileChange={onFileChange}
      uploadImage={uploadImage}
      avatar={avatar}
    />
  );
}
