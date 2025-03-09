import React from 'react';
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <header className = {"header"}>
            <a href = {"/"} className = {"logo"}> Lolsito </a>
            <nav className = {"navbar"}>
                <a href = {"/usuario"}> Usuario </a>
                <a href = {"/esports"}> E-Sports </a>
                <a href = {"/chat"}> Chat </a>
                <a href = {"/comunidad"}> Comunidad </a>
                <a href = {"/ajustes"}> Ajustes </a>
                <a href = {"/login"} className = {"sesion"}> Sesion </a>
            </nav>
        </header>
    );
};

export default Navbar;