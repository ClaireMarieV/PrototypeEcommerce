import React, { useState, useRef } from "react";

const DropdownMenu = ({ title, children }) => {
  const [deployed, setDeployed] = useState(false);
  const input = useRef(null);
  const deploy = () => {
    setDeployed(true);
    input.current.focus();
  };
  return (
    <div className="dropdown-menu-container">
      <span onClick={deploy}>{title}</span>
      <input type="text" ref={input} onBlur={() => setDeployed(false)} />
      <ul className={"dropdown-menu " + (deployed ? "visible" : "hidden")}>
        {(Array.isArray(children) ? children : [children]).map((child) => (
          <li>{child}</li>
        ))}
      </ul>
      <style jsx>{`
        .dropdown-menu-container {
          position: relative;
        }
        input {
          height: 0;
          width: 0;
          margin: 0;
          padding: 0;
        }
        .dropdown-menu {
          transition: all 5s;
          position: absolute;
          overflow: hidden;
          list-style: none;
        }
        .dropdown-menu.visible {
          height: auto;
        }
        .dropdown-menu.hidden {
          height: 0;
        }
      `}</style>
    </div>
  );
};

export default DropdownMenu;
