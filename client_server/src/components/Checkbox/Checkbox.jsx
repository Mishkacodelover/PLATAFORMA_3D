import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { FormControlLabel } from "@mui/material";

export default function ControlledCheckbox({ text }) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={text}
      />
    </>
  );
}
