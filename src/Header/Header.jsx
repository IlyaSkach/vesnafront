import React from "react";

import "./Header.css";
import logo from ".././Img/logo_vesna.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
				<div className="header__main">
        <nav>
          <ul className="header__nav">
            <li>
              <Link className="header__menu" to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="header__menu-second" to="/team">
                Мастера
              </Link>
            </li>
          </ul>
        </nav>
        <img className="header__logo" src={logo} alt="logo" />
        <nav>
          <ul className="header__nav">
            <li>
              <Link className="header__menu" to="/price">
                Цены
              </Link>
            </li>
            <li>
              <Link className="header__menu-second" to="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
				</div>
				<svg className="header__svg"
        width="1296"
        height="1"
        viewBox="0 0 1296 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line opacity="0.5" y1="0.5" x2="1296" y2="0.5" stroke="white" />
      </svg>
      </header>
     
    </>
  );
};

export default Header;
