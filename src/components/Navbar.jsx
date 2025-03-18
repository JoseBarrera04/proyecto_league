import React, { useEffect } from 'react';
import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slice/authSlice.jsx";

const Navbar = () => {
    const isLogged = useSelector((state) => state.auth.isLogged);
    const username = useSelector((state) => state.auth.username);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            dispatch(login(storedUser));
        }
    }, [dispatch]);

    const manejarCerrarSesion = () => {
        localStorage.removeItem("user");
        dispatch(logout());
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
                    <button onClick = {manejarCerrarSesion} className = {"sesion"}> Cerrar sesión </button>
                ) : (
                    <Link to = "/login" className = {"sesion"}> Iniciar Sesion </Link>
                )}
            </nav>
        </header>
    );
};

export default Navbar;