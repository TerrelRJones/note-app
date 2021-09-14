import React from "react";
import "./style.css";
const SideMenu = () => {
  return (
    <div className="side-menu__container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Label</a>
        </li>
        <li>
          <a href="/">Pin</a>
        </li>
        <li>
          <a href="/">Delete</a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
