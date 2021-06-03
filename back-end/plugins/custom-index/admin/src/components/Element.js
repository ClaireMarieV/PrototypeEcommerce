import React from "react";
import Text from "./Text";
import Image from "./Image";
import Category from "./Category";
import Product from "./Product";

const elementToComponent = (
  element,
  { setElementText, setElementImage, setElementCategory, setElementProduct },
  { categories },
  { products }
) => {
  switch (element.type) {
    case "text":
      return <Text element={element} setElementText={setElementText} />;
    case "image":
      return <Image element={element} setElementImage={setElementImage} />;
    case "category":
      return (
        <Category
          element={element}
          setElementCategory={setElementCategory}
          categories={categories}
        />
      );
    case "product":
      return (
        <Product
          element={element}
          setElementProduct={setElementProduct}
          products={products}
          categories={categories}
        />
      );
  }
};

const Element = ({
  element,
  maxColumnSpan,
  categories,
  products,
  onColumnSpanChange,
  onTypeChange,
  setElementText,
  setElementImage,
  setElementCategory,
  setElementProduct,
  removeElement,
}) => (
  <li
    className="li-elements-claire"
    style={{
      gridColumn: `${element.column + 1} / span ${element.columnSpan}`,
    }}
  >
    <div className="select-remove">
      <label>
        Type :
        <select
          className="select-claire"
          onChange={(event) => onTypeChange(event.target.value)}
          value={element.type}
        >
          <option value="text">Texte</option>
          <option value="image">Image</option>
          <option value="category">Categorie</option>
          <option value="product">Produit</option>
        </select>
      </label>
      <button onClick={removeElement}>x</button>
    </div>
    <label>
      Taille :
      <input
        type="number"
        min="1"
        max={maxColumnSpan}
        value={element.columnSpan}
        onChange={(event) => {
          onColumnSpanChange(parseInt(event.target.value));
        }}
      />
    </label>
    {elementToComponent(
      element,
      {
        setElementText,
        setElementImage,
        setElementCategory,
        setElementProduct,
      },
      { categories },
      { products }
    )}
    <style jsx>{`
      label {
        gap: 1rem;
        display: flex;
        align-items: center;
      }
      input {
        border: 1px solid grey;
        border-radius: 5px;
        padding: 0.5rem;
      }
      .select-remove {
        display: flex;
        justify-content: space-between;
      }
      .select-claire {
        padding: 1rem;
      }
      .select-claire > option {
        margin: 1rem;
      }
    `}</style>
  </li>
);
export default Element;
