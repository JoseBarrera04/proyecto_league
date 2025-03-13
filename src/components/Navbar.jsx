import React, { useState, useEffect } from 'react';
import "../styles/navbar.css";
import {Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setIsLogged(true);
            setUsername(storedUser.username);
        }
    }, []);

    const manejarCerrarSesion = () => {
        localStorage.removeItem("user");
        setIsLogged(false);
        setUsername("");
        navigate("/login");
    };

    return (
        <header className = {"header"}>
            <Link to = "/" className = {"logo"}> Lolsito </Link>
            <nav className = {"navbar"}>
                <Link to = "/usuario" className = {"link"}> {isLogged ? username : "Usuario"} </Link>
                <Link to = "/esports" className = {"link"}> E-Sports </Link>
                <Link to = "/chat" className = {"link"}> Chat </Link>
                <Link to = "/comunidad" className = {"link"}> Comunidad </Link>
                <Link to = "/ajustes" className = {"link"}> Ajustes </Link>
                {isLogged ? (
                    <button onClick={manejarCerrarSesion} className = {"sesion"}> Cerrar sesión </button>
                ) : (
                    <Link to = "/login" className = {"sesion"}> Iniciar Sesion </Link>
                )}
            </nav>
            <Outlet/>
        </header>
    );
};

export default Navbar;