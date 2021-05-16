import React from "react";

const Text = ({ element, setElementText }) => (
  <label>
    Texte :
    <input
      type="text"
      value={element.text}
      onChange={(event) => setElementText(event.target.value)}
    />
  </label>
);
export default Text;
