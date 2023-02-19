import HandleDataView from "./HandleDataView";
import { useState } from "react";

export default function HandleData() {
  const [checked, setChecked] = useState(true);

  const [openRegister, setOpenRegister] = useState(false);

  const handleCloseRegister = () => setOpenRegister(false);
  const handleOpenRegister = () => setOpenRegister(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <HandleDataView
      checked={checked}
      handleChange={handleChange}
      handleOpenRegister={handleOpenRegister}
      openRegister={openRegister}
      handleCloseRegister={handleCloseRegister}
    />
  );
}
