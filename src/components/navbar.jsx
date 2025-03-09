import React from 'react';
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className = {"header"}>
            <Link to = "/" className = {"logo"}> Lolsito </Link>
            <nav className = {"navbar"}>
                <Link to = "/usuario" className = {"link"}> Usuario </Link>
                <Link to = "/esports" className = {"link"}> esports </Link>
                <Link to = "/chat" className = {"link"}> Chat </Link>
                <Link to = "/comunidad" className = {"link"}> Comunidad </Link>
                <Link to = "/ajustes" className = {"link"}> Ajustes </Link>
                <Link to = "/login" className = {"sesion"}> Sesion </Link>
            </nav>
        </header>
    );
};

export default Navbar;