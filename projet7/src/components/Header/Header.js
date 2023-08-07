import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logoKasa.svg";
import "./_header.scss"


const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" title="Logo de Kasa" />
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/APropos"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
