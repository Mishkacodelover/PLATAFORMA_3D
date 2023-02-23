import AdminDashboardView from "./AdminDashboardView";
import { useState } from "react";
import { useFormik } from "formik";
import { initialValues } from "../../components/InviteMember/utils/inviteMemberValues";
import { InviteMemberSchema } from "../../components/InviteMember/inviteMemberSchema";

export default function AdminDashboard() {
  const handleCloseRegister = () => setOpenRegister(false);
  const handleOpenRegister = () => setOpenRegister(true);

  const [openRegister, setOpenRegister] = useState(false);

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
      } else {
        console.log("error en el registro"); ///...alluser,values
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
    />
  );
}
