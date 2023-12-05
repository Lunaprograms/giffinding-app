import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onSubmitValue = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  const myTitle = "LUNITA  GIFFINDING  APP";
  return (
    <>
      <h1>{myTitle}</h1>
      <AddCategory onSubmitValue={onSubmitValue} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
