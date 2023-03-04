import AdminDashboardView from "./AdminDashboardView";
import { useState, useEffect } from "react";
import { useFormik } from "formik";

import { initialValues } from "../../components/InviteMember/utils/inviteMemberValues";
import { InviteMemberSchema } from "../../components/InviteMember/inviteMemberSchema";

export default function AdminDashboard() {
  const [openRegister, setOpenRegister] = useState(false);
  const [allUser, setAllUser] = useState(null);
  const [value] = useState({ isDelete: false });
  const [openEditUser, setOpenEditUser] = useState(false);
  const [userEditing, setUserEditing] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCloseRegister = () => setOpenRegister(false);
  const handleOpenRegister = () => setOpenRegister(true);

  const handleClickOpen = (id) => {
    setOpen(true);
    setUserEditing(allUser.find((item) => item.id === id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEditUser = (id) => {
    setOpenEditUser(true);
    setUserEditing(allUser.find((item) => item.id === id));
  };

  const handleCloseEditUser = () => setOpenEditUser(false);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/user/all-users`);
      const data = await response.json();
      setAllUser(data);
    }
    fetchData();
  }, []);

  async function deleteUser(id) {
    const response = await fetch(`http://localhost:8000/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    try {
      if (response.ok) {
        console.log(response);
        handleClose();

        const editList = await response.json();
        if (editList) {
          setAllUser(editList);
        }
      } else {
        console.log("error al eliminar usuario");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputData(event) {
    setUserEditing({
      ...userEditing,
      [event.target.name]: event.target.value,
    });
  }

  async function updateUser(event, userEditing) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:8000/user/${userEditing.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEditing),
      }
    );
    try {
      if (response.ok) {
        handleCloseEditUser();

        const editList = await response.json();
        if (editList) {
          setAllUser(editList);
          const userIndexToUpdate = allUser.findIndex(
            (userToEdit) => userToEdit.id === userEditing.id
          );
          const newUserList = [...allUser];
          newUserList[userIndexToUpdate] = editList;
          setAllUser(newUserList);
        }
      } else {
        alert("Cambie los datos");
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function registerMember(values) {
    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        handleCloseRegister();
        const newMemberList = [...allUser, values];
        setAllUser(newMemberList);
      } else {
        console.log("error en el registro");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (values, actions) => {
    registerMember(values);
    actions.resetForm();
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: InviteMemberSchema,
      onSubmit,
    });

  return (
    <AdminDashboardView
      registerMember={registerMember}
      handleCloseRegister={handleCloseRegister}
      handleOpenRegister={handleOpenRegister}
      openRegister={openRegister}
      handleSubmit={handleSubmit}
      values={values}
      handleChange={handleChange}
      errors={errors}
      isSubmitting={isSubmitting}
      allUser={allUser}
      deleteUser={deleteUser}
      handleOpenEditUser={handleOpenEditUser}
      handleCloseEditUser={handleCloseEditUser}
      handleClose={handleClose}
      handleClickOpen={handleClickOpen}
      handleInputData={handleInputData}
      open={open}
      openEditUser={openEditUser}
      updateUser={updateUser}
      userEditing={userEditing}
    />
  );
}
