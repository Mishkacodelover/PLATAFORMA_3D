import PatternView from "./PatternView";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Pattern() {
  const [pattern, setPattern] = useState(null);
  const [alert, setAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [patternDeleted, setPatternDeleted] = useState(null);
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

  async function uploadPattern(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/pattern/upload/pattern",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setAlert(true);
        setTimeout(() => setAlert(false), 2000);
        const newImage = await response.json();
        if (newImage) {
          setPattern(newImage);
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
          `http://localhost:8000/pattern/all-patterns/${authorization.id}`
        );
        const data = await response.json();
        setPattern(data);
      }
      fetchData();
    },
    [authorization.id]
  );

  const handleClickOpen = (id) => {
    setOpen(true);
    setPatternDeleted(pattern.find((item) => item.id === id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function deletePattern() {
    const user = { userCreated: userId.userCreated };
    const response = await fetch(
      `http://localhost:8000/pattern/${patternDeleted.id}`,
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

        const resourceIndexDeleted = pattern.findIndex(
          (resourceItem) => resourceItem.id === patternDeleted.id
        );
        const newResourceList = [...pattern];
        newResourceList.splice(resourceIndexDeleted, 1);
        setPattern(newResourceList);
      } else {
        console.log("error al eliminar la imagen");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PatternView
      pattern={pattern}
      onFileChange={onFileChange}
      uploadPattern={uploadPattern}
      alert={alert}
      deletePattern={deletePattern}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
      deleteAlert={deleteAlert}
    />
  );
}
