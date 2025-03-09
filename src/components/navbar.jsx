import React from 'react';
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <header className = {"header"}>
            <a href = {"/"} className = {"logo"}> Lolsito </a>
            <nav className = {"navbar"}>
                <a href = {"/"}> Usuario </a>
                <a href = {"/"}> E-Sports </a>
                <a href = {"/"}> Chat </a>
                <a href = {"/"}> Comunidad </a>
                <a href = {"/"}> Ajustes </a>
                <a href = {"/"} className = {"sesion"}> Sesion </a>
            </nav>
        </header>
    );
};

export default Navbar;