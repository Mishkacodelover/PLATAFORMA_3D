import { Paper, InputBase, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function SearchView({
  valueInput,
  onSearchValueChange,
  handleSubmit,
}) {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 460 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <PersonIcon />
      </IconButton>
      <InputBase
        size="small"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar usuario"
        inputProps={{ "aria-label": "Buscar usuario" }}
        value={valueInput}
        onChange={onSearchValueChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
