import React, { useState } from "react";

const Product = ({ element, setElementProduct, products, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  return (
    <>
      <label>
        Categorie :
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option>Choisissez une catégorie </option>
          {categories.map((category) => (
            <option value={category._id} key={category.key}>
              {category.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Produit :
        <select
          value={
            element.product ? element.product._id || element.product : null
          }
          onChange={(event) => setElementProduct(event.target.value)}
        >
          <option>Choisissez un produit</option>

          {products
            .filter((product) => product.categorie._id === selectedCategory)
            .map((product) => (
              <option value={product._id} key={product.key}>
                {product.label}
              </option>
            ))}
        </select>
      </label>
    </>
  );
};

export default Product;
