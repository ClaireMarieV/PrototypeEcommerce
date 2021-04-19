import React, { useState, useRef } from "react";

const DropdownMenu = ({ title, children }) => {
  const [deployed, setDeployed] = useState(false);
  const menuRef = useRef(null);
  const deploy = () => {
    setDeployed(true);
    menuRef.current.focus();
  };

  return (
    <div
      className="dropdown-menu-container"
      tabindex="0"
      ref={menuRef}
      onBlur={() => setDeployed(false)}
    >
      <span onClick={deploy}>{title}</span>
      <ul className={"dropdown-menu " + (deployed ? "visible" : "hidden")}>
        {(Array.isArray(children) ? children : [children]).map((child) => (
          <li>{child}</li>
        ))}
      </ul>
      <style jsx>{`
        .dropdown-menu-container {
          position: relative;
        }
        .dropdown-menu {
          transition: all 5s;
          height: auto;

          position: absolute;
          overflow: hidden;
          list-style: none;
          margin: 0.5rem;
        }

        .dropdown-menu.hidden:not(:hover) {
          height: 0;
        }
      `}</style>
    </div>
  );
};

export default DropdownMenu;
