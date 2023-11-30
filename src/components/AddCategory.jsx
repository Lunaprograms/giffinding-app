import { useState } from "react";

export const AddCategory = ({ onSubmitValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitValue(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="BUSCATE UN GIF MAMALON"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
