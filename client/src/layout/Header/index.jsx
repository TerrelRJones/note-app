import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="header__container">
      <div>
        <a className="links" href="/">
          NOTESSSS
        </a>
      </div>
      <div className="header__search">
        <input />
        <button>SEARCH</button>
      </div>
      <div>
        <ul className="login__container">
          <li>
            <a className="links" href="/">
              Login
            </a>
          </li>
          <li>
            <a className="links" href="/">
              Register
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
