import { useState } from "react";

export const AddCategory = ({ onSubmitValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    onSubmitValue(inputValue.trim().toLowerCase());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="BUSCAR GIFS"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
