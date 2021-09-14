import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-menu__container">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Label</Link>
        </li>
        <li>
          <Link href="/">Create Note</Link>
        </li>
        <li>
          <Link href="/">Delete</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
