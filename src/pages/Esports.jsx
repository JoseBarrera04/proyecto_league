import React from 'react';
import "../styles/Esports.css";

import noticia1 from "../images/Esports/Not1.png";
import noticia2 from "../images/Esports/Not2.png";
import noticia3 from "../images/Esports/Not3.png";
import noticia4 from "../images/Esports/Not4.png";
import noticia5 from "../images/Esports/Not5.png";
import noticia6 from "../images/Esports/Not6.png";
import noticia7 from "../images/Esports/Not7.png";
import noticia8 from "../images/Esports/Not8.png";
import noticia9 from "../images/Esports/Not9.png";
import noticia10 from "../images/Esports/Not10.png";
import noticia11 from "../images/Esports/Not11.png";
import noticia12 from "../images/Esports/Not12.png";
import noticia13 from "../images/Esports/Not13.png";
import noticia14 from "../images/Esports/Not14.png";
import noticia15 from "../images/Esports/Not15.png";
import noticia16 from "../images/Esports/Not16.png";

const noticias = [
    {
        titulo: '¡Llegan los Playoffs al Split 2 de la LTA!',
        fecha: '20 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/llegan-los-playoffs-al-split-2-de-la-lta',
        imagen: noticia1,
    },
    {
        titulo: 'Hall of Legends: Uzi | Tráiler',
        fecha: '19 de mayo de 2025',
        link: 'https://www.youtube.com/watch?v=MybzShylJUw',
        imagen: noticia2,
        esVideo: true,
    },
    {
        titulo: 'Uzi se une al Hall of Legends',
        fecha: '19 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/uzi-honored-as-second-hall-of-legends-inductee',
        imagen: noticia3,
    },
    {
        titulo: 'Playoffs Split 2 LTAN - Guía',
        fecha: '19 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/guide-to-ltan-split-2-playoffs',
        imagen: noticia4,
    },
    {
        titulo: '¡Fantasy LTA ya está aquí!',
        fecha: '18 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/lta-fantasy-is-here',
        imagen: noticia5,
    },
    {
        titulo: 'LTA Norte 2025: Todo sobre el Split 2',
        fecha: '17 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/lta-north-split-2-primer',
        imagen: noticia6,
    },
    {
        titulo: 'LTA Sur 2025: Guía completa del Split 2',
        fecha: '16 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/lta-sur-2025-todo-lo-que-necesitas-saber-sobre-el-split-2',
        imagen: noticia7,
    },
    {
        titulo: '¡Anunciamos el recinto del MSI 2025!',
        fecha: '15 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/announcing-the-msi-2025-venue',
        imagen: noticia8,
    },
    {
        titulo: 'Fearless Draft se apodera de 2025',
        fecha: '14 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/fearless-draft-takes-over-2025',
        imagen: noticia9,
    },
    {
        titulo: 'Manual del FST 2025',
        fecha: '13 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/fst-2025-primer',
        imagen: noticia10,
    },
    {
        titulo: 'Tier 2 en LatAm: LRN y LRS 2025',
        fecha: '12 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/nivel-2-en-latam-lrn-y-lrs-2025',
        imagen: noticia11,
    },
    {
        titulo: 'Venta de boletos para el torneo First Stand',
        fecha: '11 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/first-stand-tournament-ticket-sales',
        imagen: noticia12,
    },
    {
        titulo: 'Suscripciones de Twitch',
        fecha: '10 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/lol-esports-twitch-subscriptions',
        imagen: noticia13,
    },
    {
        titulo: 'Bienvenidos a la LTA',
        fecha: '9 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/welcome-to-the-lta',
        imagen: noticia14,
    },
    {
        titulo: 'Los esports de LoL en 2025',
        fecha: '8 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/lol-esports-in-2025',
        imagen: noticia15,
    },
    {
        titulo: 'Guía de Américas Nivel 2',
        fecha: '7 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/americas-tier-2-primer',
        imagen: noticia16,
    },
];

export default function Esports() {
    return (
        <div className="esports-container">
            <h1 className="esports-title">NOTICIAS</h1>

            <div className="esports-grid">
                {noticias.map((noticia, index) => (
                    <a
                        key={index}
                        href={noticia.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-noticia"
                    >
                        <div className="relative">
                            <img src={noticia.imagen} alt={noticia.titulo} className="noticia-img" />
                            {noticia.esVideo && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-teal-500 p-3 rounded-full shadow-lg">
                                        <span className="text-white text-xl font-bold">▶</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="noticia-content">
                            <p className="noticia-fecha">{noticia.fecha}</p>
                            <h3 className="noticia-titulo">{noticia.titulo}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
