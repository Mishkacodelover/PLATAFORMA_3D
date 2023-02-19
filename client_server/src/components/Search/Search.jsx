import SearchView from "./SearchView";
import { useState } from "react";

export default function Search() {
  const [inputUser, setInputUser] = useState("");

  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };
  return (
    <SearchView
      handleSubmit={handleSubmit}
      valueInput={valueInput}
      onSearchValueChange={onSearchValueChange}
    />
  );
}
