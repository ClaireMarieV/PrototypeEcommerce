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
