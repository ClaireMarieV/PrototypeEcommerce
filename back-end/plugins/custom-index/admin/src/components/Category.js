import React from "react";

const Category = ({ element, setElementCategory, categories }) => {
  return (
    <label>
      Categorie :
      <select
        value={
          element.category ? element.category._id || element.category : null
        }
        onChange={(event) => setElementCategory(event.target.value)}
      >
        <option>Choisissez une catégorie</option>
        {categories.map((category) => (
          <option value={category._id} key={category.id}>
            {category.label}
          </option>
        ))}
      </select>
    </label>
  );
};
export default Category;
