import React from 'react';
import "./styles/App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Usuario from './pages/Usuario.jsx';
import Ajustes from './pages/Ajustes.jsx';
import Register from "./pages/Register.jsx";
import Comunidad from "./pages/Comunidad.jsx";
import Chat from "./pages/Chat.jsx";
import Esports from "./pages/Esports.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <>
            <Navbar />
            <div className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/usuario" element={<Usuario />} />
                    <Route path="/comunidad" element={<Comunidad />} />
                    <Route path="/ajustes" element={<Ajustes />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/esports" element={<Esports />} />
                </Routes>
            </div>
        </>
    );
}

export default App;