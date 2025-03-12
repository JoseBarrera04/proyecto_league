import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Usuario from './pages/Usuario.jsx';
import Ajustes from './pages/Ajustes.jsx';
import "./styles/App.css";
import Register from "./pages/Register.jsx";
import Comunidad from "./pages/Comunidad.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/login" element = {<Login/>} />
                <Route path = "/register" element = {<Register/>} />
                <Route path = "/usuario" element = {<Usuario />} />
                <Route path = "/ajustes" element = {<Ajustes />} />
                <Route path="/comunidad" element={<Comunidad />} />


            </Routes>
        </div>
    );
}

export default App;