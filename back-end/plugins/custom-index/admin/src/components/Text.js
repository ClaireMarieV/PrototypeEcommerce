import React from "react";

const Text = ({ element, setElementText }) => (
  <label>
    Texte :
    <input
      className="text"
      type="text"
      value={element.text}
      onChange={(event) => setElementText(event.target.value)}
    />
    <style jsx>{`
      .text {
        box-shadow: inset 0.2rem 0.2rem 0.6rem #aeaec040,
          inset -0.2rem -0.2rem 0.6rem #f5f9fd;
        border: none;
        background: #e7effa;
        padding: 0.5rem;
      }
    `}</style>
  </label>
);
export default Text;
