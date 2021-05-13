import React, { useState } from "react";
import "./styles/Navbar.css";
import images from '../components/images.js';
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <Link smooth={true} to="inicio"><img className="navbar-image" src={images.logo}/></Link>
      <ul className="navbar-list">
        <Link className="navbar-link de" smooth={true} to="serv">Servicios</Link>
        <Link className="navbar-link de" smooth={true} to="info">¿Qué es Tech Fix?</Link>
        <Link className="navbar-link dy" smooth={true} to="contacto">Contáctame</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
