import React, { useEffect, useState } from 'react';
import "../styles/Usuario.css";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../admin/Apis.js";

const Usuario = () => {
    const [activeTab, setActiveTab] = useState('Resumen');
    const [datosUsuario, setDatosUsuario] = useState(null);
    const [puuid, setPuuid] = useState(null);
    const [historialPartidas, setHistorialPartidas] = useState(null);
    const [infoPartidas, setInfoPartidas] = useState(null);
    const [datosClasificatoria, setDatosClasificatoria] = useState(null);

    const user = useSelector(state => state.auth.username);
    const REGION = "la1";
    const API_KEY = config.API_KEY;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const respuestaData = await axios.get(
                    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Darth%20Radagon/Elden`,
                    {
                        headers: {
                            'X-Riot-Token': API_KEY,
                        },
                    }
                );
                setPuuid(respuestaData.data.puuid);
                setDatosUsuario(respuestaData.data);
                console.log(respuestaData);
                console.log(respuestaData.data.gameName);
            } catch (e) {
                console.error(e);
            }
        };
        getUserData();
    }, []);

    useEffect(() => {
        if (!puuid) return;

        const getInvocadorData = async () => {
            try {
                const respuestaPlayerData = await axios.get(
                    `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
                    {
                        headers: {
                            'X-Riot-Token': API_KEY,
                        },
                    }
                );
                //setDatosUsuario(respuestaPlayerData.data);
            } catch (e) {
                console.error(e);
            }
        };
        getInvocadorData();
    }, [puuid]);

    useEffect(() => {
        if (!puuid) return;

        const getHistorialPartidas = async () => {
            try {
                const historialJugador = await axios.get(
                    `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=normal&start=0&count=5`,
                    {
                        headers: {
                            'X-Riot-Token': API_KEY,
                        },
                    }
                );
                setHistorialPartidas(historialJugador.data);
                console.log(historialPartidas);
            } catch (e) {
                console.error(e);
            }
        };
        getHistorialPartidas();
    }, [puuid]);

    useEffect(() => {
        if (!historialPartidas || historialPartidas.length === 0) return;

        const fetchDetallesPartidas = async () => {
            try {
                const getInfoPartidas = historialPartidas.map(async (matchId) => {
                    const respuestaPartida = await axios.get(
                        `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`,
                        {
                            headers: {
                                'X-Riot-Token': API_KEY,
                            },
                        }
                    );
                    return respuestaPartida.data;
                });

                const partidas = await Promise.all(getInfoPartidas);
                console.log(partidas);
                setInfoPartidas(partidas);
            } catch (e) {
                console.error(e);
            }
        };
        fetchDetallesPartidas();
    }, [historialPartidas]);

    useEffect(() => {
        if (!puuid) return;
    }, [puuid]);

    if (!user) {
        return <div> Por favor, inicia sesión para ver esta página. </div>;
    }

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
                                            <img src="src/images/bronceLol.png" alt="Maestro Icon" /> Maestro I
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
                                <h3>Partidas recientes</h3>
                                {infoPartidas && infoPartidas.length > 0 ? (
                                    infoPartidas.map((partida, index) => {
                                        const participante = partida.info.participants.find(
                                            (p) => p.puuid === puuid
                                        );
                                        const victoria = participante.win ? "Victoria" : "Derrota";
                                        const auxCss = participante.win ? "match-card-victory" : "match-card-defeat";
                                        const duracionPartida = Math.floor(partida.info.gameDuration / 60) + " min " + (partida.info.gameDuration % 60) + " s";
                                        const kda = ((participante.kills + participante.assists) / (participante.deaths || 1)).toFixed(2);
                                        const logroAsesinato = participante.pentaKills > 0 ? "Asesinato Penta" : participante.quadraKills > 0 ? "Asesinato Cuádruple" : participante.tripleKills > 0 ? "Asesinato Triple" : participante.doubleKills > 0 ? "Asesinato Doble" : "";

                                        return (
                                            <div key={index} className={`match-card ${auxCss}`}>
                                                <div className="match-details">
                                                    <span>{partida.info.gameMode}</span>
                                                    <span>{victoria}</span>
                                                    <span>{duracionPartida}</span>
                                                </div>
                                                <div className="champion-stats">
                                                    <img
                                                        src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${participante.championName}.png`}
                                                        alt={participante.championName}
                                                        className="champion-icon"
                                                    />
                                                    <div className="stats">
                                                        <p>
                                                            {participante.kills} / {participante.deaths} / {participante.assists}
                                                        </p>
                                                        <p>{kda}:1 KDA</p>
                                                    </div>
                                                </div>
                                                {logroAsesinato && (
                                                    <span className="result">{logroAsesinato}</span>
                                                )}
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>Cargando partidas...</p>
                                )}
                            </div>

                            {/* Champions Played */}
                            <div className="champions-played">
                                <h3>Campeones jugados en las últimas 10 partida(s)</h3>
                                <div className="champion-card">
                                    <img src="champion-icon-1.jpg" alt="Champion Icon" />
                                    <p>67% (wins) V: 1D 2.89:1 KDA</p>
                                </div>
                            </div>

                            {/* Preferred Role */}
                            <div className="preferred-role">
                                <h3>Rol preferido (Clasificatoria)</h3>
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
                return <div>Contenido de Campeones (aquí irían estadísticas de campeones)</div>;
            case 'Maestría':
                return <div>Contenido de Maestría (aquí irían las maestrías del usuario)</div>;
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
                        <h1>{datosUsuario ? datosUsuario.gameName : "Cargando..."}</h1>
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