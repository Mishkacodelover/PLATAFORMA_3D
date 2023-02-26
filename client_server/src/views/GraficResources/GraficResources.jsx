import GraficResourcesView from "./GraficResoucesView";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function GraficResources() {
  const [resource, setResource] = useState(null);
  const [alert, setAlert] = useState(false);
  const { authorization } = useAuthContext();

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
      const response = await fetch("http://localhost:8000/images/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setAlert(true);
        const newImage = await response.json();
        if (newImage) {
          setResource(newImage);
        }
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
          `http://localhost:8000/images/all-images/${authorization.id}`
        );
        const data = await response.json();
        setResource(data);
      }
      fetchData();
    },
    [authorization.id]
  );
  return (
    <GraficResourcesView
      resource={resource}
      uploadImage={uploadImage}
      onFileChange={onFileChange}
      alert={alert}
    />
  );
}
