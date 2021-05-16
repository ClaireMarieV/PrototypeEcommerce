import React from "react";
import Text from "./Text";
import Image from "./Image";

const elementToComponent = (element, { setElementText }) => {
  switch (element.type) {
    case "text":
      return <Text element={element} setElementText={setElementText} />;
    case "image":
      return <Image element={element} />;
  }
};

const Element = ({
  element,
  maxColumnSpan,
  onColumnSpanChange,
  onTypeChange,
  setElementText,
}) => (
  <li
    style={{
      gridColumn: `${element.column + 1} / span ${element.columnSpan}`,
    }}
  >
    <label>
      Type :
      <select
        onChange={(event) => onTypeChange(event.target.value)}
        value={element.type}
      >
        <option value="text">Texte</option>
        <option value="image">Image</option>
        <option value="category">Categorie</option>
      </select>
    </label>
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
    {elementToComponent(element, { setElementText })}
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
    `}</style>
  </li>
);
export default Element;
