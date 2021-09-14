import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header__container">
      <div>
        <Link className="links" to="/">
          NOTESSSS
        </Link>
      </div>
      <div className="header__search">
        <input />
        <button>SEARCH</button>
      </div>
      <div>
        <ul className="login__container">
          <li>
            <Link className="links" to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
