import React from "react";

import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <div id="menu">
        <GiHamburgerMenu id="burguer" />
      </div>
      <FaArrowRight />
      <ul id="nav-links">
        <NavLink to="/">VUIT SEGUROS</NavLink>
        <NavLink to="/cred">VUIT CRED</NavLink>
        <NavLink to="/beneficios">VUIT BENEFICIOS</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
