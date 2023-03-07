import HandleDataView from "./HandleDataView";
import { useState } from "react";

export default function HandleData({
  registerMember,
  handleCloseRegister,
  handleOpenRegister,
  openRegister,
  values,
  handleChange,
  errors,
  isSubmitting,
  handleSubmit,
  handleToggleCircle,
  openCircle,
}) {
  const [checked, setChecked] = useState(true);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <HandleDataView
      checked={checked}
      handleCheck={handleCheck}
      handleOpenRegister={handleOpenRegister}
      openRegister={openRegister}
      handleCloseRegister={handleCloseRegister}
      registerMember={registerMember}
      values={values}
      handleChange={handleChange}
      errors={errors}
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
      handleToggleCircle={handleToggleCircle}
      openCircle={openCircle}
    />
  );
}
