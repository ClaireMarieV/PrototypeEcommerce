import React from "react";

const Category = ({ element, setElementCategory, categories }) => {
  return (
    <label>
      Categorie :
      <select onChange={(event) => setElementCategory(event.target.value)}>
        {categories.map((category) => (
          <option key={category.key}>{category.label}</option>
        ))}
      </select>
    </label>
  );
};
export default Category;
