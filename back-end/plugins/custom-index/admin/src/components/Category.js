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
        <option>Choisissez la catégorie</option>
        {categories.map((category) => (
          <option value={category._id} key={category.key}>
            {category.label}
          </option>
        ))}
      </select>
    </label>
  );
};
export default Category;
