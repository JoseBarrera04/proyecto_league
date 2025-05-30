import React from 'react';
import "../styles/Ajustes.css";
import { FaLock, FaHeadset, FaSignOutAlt, FaDiscord } from "react-icons/fa";
import { GiLaurelCrown } from "react-icons/gi"; // Ícono alternativo tipo logo para LoL

const Ajustes = () => {
    return (
        <div className="settings-container">
            <div className="card">
                <ul className="list">
                    <li className="element">
                        <FaLock className="lucide" />
                        <p className="label">Cambiar Contraseña</p>
                    </li>
                    <li className="element">
                        <FaHeadset className="lucide" />
                        <a
                            href="https://support-leagueoflegends.riotgames.com/hc/es-419"
                            className="label"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Soporte
                        </a>
                    </li>
                    <li className="element">
                        <FaSignOutAlt className="lucide" />
                        <p className="label">Cerrar Sesión</p>
                    </li>
                    <li className="element">
                        <FaDiscord className="lucide" />
                        <a
                            href="https://discord.com/invite/leagueoflegends"
                            className="label"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Discord de Lolsito :D
                        </a>
                    </li>
                </ul>

                <div className="separator" />

                <ul className="list final-section">
                    <li className="element">
                        <GiLaurelCrown className="lucide" />
                        <a
                            href="https://universe.leagueoflegends.com/es_MX/"
                            className="label"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Conoce más sobre Lol
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Ajustes;
