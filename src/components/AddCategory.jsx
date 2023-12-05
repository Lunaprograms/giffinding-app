import { useState } from "react";

// eslint-disable-next-line react/prop-types
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
        placeholder="...thinking about...
        "
        value={inputValue}
        onChange={onInputChange}
        id={inputValue}
      />
    </form>
  );
};
