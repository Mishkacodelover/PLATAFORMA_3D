import GraficResourcesView from "./GraficResoucesView";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function GraficResources() {
  const [resource, setResource] = useState(null);
  const [alert, setAlert] = useState(false);

  const [value] = useState({ isDelete: false });
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [resourceDeleted, setResourceDeleted] = useState(null);
  const { authorization } = useAuthContext();
  const userId = { userCreated: authorization.id };

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
        setTimeout(() => setAlert(false), 2000);
        const newImage = await response.json();
        if (newImage) {
          setResource(newImage);
        }
      } else {
        console.log("error al subir imagen");
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

  const handleClickOpen = (id) => {
    setOpen(true);
    setResourceDeleted(resource.find((item) => item.id === id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function deleteResource() {
    const user = { userCreated: userId.userCreated };
    const response = await fetch(
      `http://localhost:8000/images/image/${resourceDeleted.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    try {
      if (response.status === 200) {
        handleClose();
        setDeleteAlert(true);
        setTimeout(() => setDeleteAlert(false), 2000);
      } else {
        console.log("error al eliminar la imagen");
        setErrorAlert(true);
        setTimeout(() => setErrorAlert(false), 2000);
        const deletedRes = await response.json();
        if (deletedRes) {
          const b = resource.findIndex((item) => item.id === deletedRes.id);
          const a = [...resource];
          a.splice(b, 1);
          setResource(a);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GraficResourcesView
      resource={resource}
      uploadImage={uploadImage}
      onFileChange={onFileChange}
      alert={alert}
      deleteAlert={deleteAlert}
      deleteResource={deleteResource}
      errorAlert={errorAlert}
      handleClose={handleClose}
      handleClickOpen={handleClickOpen}
      open={open}
    />
  );
}
