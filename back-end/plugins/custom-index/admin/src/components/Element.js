import React from "react";
import Text from "./Text";
const elementToComponent = (element) => {
  switch (element.type) {
    case "text":
      return <Text element={element} />;
  }
};
const Element = ({ element, maxColumnCount, onColumnCountChange }) => (
  <div>
    <select>
      <option></option>
    </select>
    <input
      type="number"
      min="1"
      max={maxColumnCount}
      value={element.columnsCount}
      onChange={(event) => {
        onColumnCountChange(parseInt(event.target.value));
      }}
    />
    {elementToComponent(element)}
  </div>
);
export default Element;