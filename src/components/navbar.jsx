import React from 'react';
import "../styles/navbar.css";
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <header className = {"header"}>
            <Link to = "/" className = {"logo"}> Lolsito </Link>
            <nav className = {"navbar"}>
                <Link to = "/usuario" className = {"link"}> Usuario </Link>
                <Link to = "/esports" className = {"link"}> E-Sports </Link>
                <Link to = "/chat" className = {"link"}> Chat </Link>
                <Link to = "/comunidad" className = {"link"}> Comunidad </Link>
                <Link to = "/ajustes" className = {"link"}> Ajustes </Link>
                <Link to = "/login" className = {"sesion"}> Iniciar Sesion </Link>
            </nav>

            <Outlet/>
        </header>
    );
};

export default Navbar;