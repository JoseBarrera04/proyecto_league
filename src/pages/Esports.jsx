// src/pages/Esports.jsx

import React from 'react';

const noticias = [
    {
        titulo: '¡Llegan los Playoffs al Split 2 de la LTA!',
        fecha: '20 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/llegan-los-playoffs-al-split-2-de-la-lta',
        imagen: 'https://via.placeholder.com/400x200?text=Playoffs+LTA',
    },
    {
        titulo: 'Hall of Legends: Uzi | Tráiler',
        fecha: '19 de mayo de 2025',
        link: 'https://www.youtube.com/watch?v=MybzShylJUw',
        imagen: 'https://via.placeholder.com/400x200?text=Uzi+Trailer',
        esVideo: true,
    },
    {
        titulo: 'Uzi se une al Hall of Legends',
        fecha: '19 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/uzi-honored-as-second-hall-of-legends-inductee',
        imagen: 'https://via.placeholder.com/400x200?text=Uzi+Hall+of+Legends',
    },
    {
        titulo: 'Playoffs Split 2 LTAN - Guía',
        fecha: '19 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/guide-to-ltan-split-2-playoffs',
        imagen: 'https://via.placeholder.com/400x200?text=LTAN+Guia',
    },
    {
        titulo: '¡Fantasy LTA ya está aquí!',
        fecha: '18 de mayo de 2025',
        link: 'https://lolesports.com/es-MX/news/lta-fantasy-is-here',
        imagen: 'https://via.placeholder.com/400x200?text=Fantasy+LTA',
    },
];

export default function Esports() {
    return (
        <div className="bg-black text-white min-h-screen px-8 py-10">
            <h1 className="text-6xl font-extrabold mb-12 text-center">NOTICIAS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {noticias.map((noticia, index) => (
                    <a
                        key={index}
                        href={noticia.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
                    >
                        <div className="relative">
                            <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-48 object-cover" />
                            {noticia.esVideo && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-teal-500 p-3 rounded-full">
                                        <span className="text-white text-xl">▶</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{noticia.titulo}</h2>
                            <p className="text-sm text-gray-400">{noticia.fecha}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

