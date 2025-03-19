import React, { useState } from 'react';
import "../styles/Usuario.css";
import {useSelector} from "react-redux";

const Usuario = () => {
    const [activeTab, setActiveTab] = useState('Resumen');
    const user = useSelector(state => state.auth.username);

    if (!user) {
        return <div> Por favor, inicia sesión para ver esta página. </div>;
    }

    const partidasRecientes = [
        {
            modo: "Arena",
            winOrLose: "Victoria",
            tiempo: "23min 15s",
            kda: "2.67 KDA",
            resultados: "PENTAKILL",
        },

        {
            modo: "Aram",
            winOrLose: "Derrota",
            tiempo: "23min 20s",
            kda: "3.00 KDA",
            resultados: "HEXAKILL",
        },
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'Resumen':
                return (
                    <main className="main-content">
                        {/* Left Section: Ranked Stats */}
                        <section className="ranked-stats">
                            <div className="tabs">
                                <button className="sub-tab active"> Todo </button>
                                <button className="sub-tab"> Clasificatoria solo/dúo </button>
                                <button className="sub-tab"> Clasificatoria flexible </button>
                                <button className="sub-tab"> ARAM </button>
                            </div>

                            {/* Solo/Duo Ranked */}
                            <div className="ranked-section">
                                <h3> Clasificatoria solo/dúo </h3>
                                <span className="queue-type"> UNRANKED </span>
                                <table>
                                    <thead>
                                    <tr>
                                        <th> Temporada </th>
                                        <th> Nivel </th>
                                        <th> LP </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td> S2023 S2 </td>
                                        <td>
                                            <img src="src/images/bronceLol.png" alt = {"src/images/Maestro.png"} /> Maestro I
                                        </td>
                                        <td> 0 </td>
                                    </tr>
                                    </tbody>
                                </table>

                                {/* Win Rate Circle */}
                                <div className="win-rate">
                                    <div className="win-rate-circle">
                                        <span> 63% </span>
                                    </div>
                                    <p> 16P 10V 6D </p>
                                    <p> 3.27 : 1 </p>
                                    <p> C/Kill 74% </p>
                                </div>
                            </div>

                            {/* Flex Ranked */}
                            <div className="ranked-section">
                                <h3> Clasificatoria flexible </h3>
                                <span className="queue-type"> UNRANKED </span>
                                <table>
                                    <thead>
                                    <tr>
                                        <th> Temporada </th>
                                        <th> Nivel </th>
                                        <th> LP </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td> S2024 S3 </td>
                                        <td>
                                            <img src="src/images/bronceLol.png" alt="Silver Icon" /> Bronce I
                                        </td>
                                        <td> 36 </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Right Section: Recent Matches and Champions */}
                        <section className="matches-champions">
                            {/* Recent Matches */}
                            <div className="recent-matches">
                                <h3> Partidas recientes </h3>
                                <div className="match-card victory">
                                    <div className="match-details">
                                        <span> ARENA </span>
                                        <span> Victoria </span>
                                        <span> 23 min 12 s </span>
                                    </div>
                                    <div className="champion-stats">
                                        <img src="src/images/ZeriP.jpg" alt="Champion Icon" />
                                        <div className="stats">
                                            <p> 12 / 6 / 4 </p>
                                            <p> 2.67:1 KDA </p>
                                        </div>
                                    </div>
                                    <span className="result"> Asesinato Doble </span>
                                </div>
                            </div>

                            {/* Champions Played */}
                            <div className="champions-played">
                                <h3> Campeones jugados en las últimas 16 partida(s) </h3>
                                <div className="champion-card">
                                    <img src="champion-icon-1.jpg" alt="Champion Icon" />
                                    <p> 67% (wins) V: 1D 2.89:1 KDA </p>
                                </div>
                            </div>

                            {/* Preferred Role */}
                            <div className="preferred-role">
                                <h3> Rol preferido (Clasificatoria) </h3>
                                <div className="role-bars">
                                    <div className="bar" style={{ height: '80px' }}></div>
                                    <div className="bar" style={{ height: '50px' }}></div>
                                    <div className="bar" style={{ height: '30px' }}></div>
                                    <div className="bar" style={{ height: '20px' }}></div>
                                    <div className="bar" style={{ height: '10px' }}></div>
                                </div>
                            </div>
                        </section>
                    </main>
                );
            case 'Campeones':
                return <div> Contenido de Campeones (aquí irían estadísticas de campeones) </div>;
            case 'Maestría':
                return <div> Contenido de Maestría (aquí irían las maestrías del usuario) </div>;
            default:
                return null;
        }
    };

    return (
        <div className="profile-container">
            {/* Header Section */}
            <header className="profile-header">
                <div className="profile-info">
                    <img
                        src="src/images/ZeriP.jpg"
                        alt="Profile Icon"
                        className="profile-icon"
                    />
                    <div className="profile-details">
                        <h1> Darth Radagon #ELDEN </h1>
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav className="nav-tabs">
                <button
                    className={`tab ${activeTab === 'Resumen' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Resumen')}
                >
                    Resumen
                </button>
                <button
                    className={`tab ${activeTab === 'Campeones' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Campeones')}
                >
                    Campeones
                </button>
                <button
                    className={`tab ${activeTab === 'Maestría' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Maestría')}
                >
                    Maestría
                </button>
            </nav>

            {/* Main Content */}
            {renderContent()}
        </div>
    );
};

export default Usuario;