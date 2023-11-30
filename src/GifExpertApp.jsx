import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["laperri"]);

  const onSubmitValue = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>giiffffff</h1>
      <AddCategory onSubmitValue={onSubmitValue} />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
