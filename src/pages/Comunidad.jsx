import React, { useState } from "react";
import "../styles/Comunidad.css";

// Importar imágenes manualmente
import actualizacionLol from "../images/actualizacionLol.jpg";
import actualizando from "../images/actualizando.jpg";
import notasVersion from "../images/notasVersion.jpg";
import notasVersion2 from "../images/notasDeVersion.jpg";

// íconos para el foro
import powder from "../images/icons/jinx.jpg";
import jinx from "../images/icons/jinxota.jpg";
import ekko from "../images/icons/ekko.jpg";
import gangplank from "../images/icons/gangplank.jpg";
import lux from "../images/icons/lux.png";
import akali from "../images/icons/akali.jpg";


// Datos iniciales del foro con opiniones fijas
const opinionesIniciales = [
    {
        usuario: "XxMain_Akali_BetaxX",
        icono: akali,
        comentario: "La nueva versión 25.05 cambió totalmente el meta. Ahora los asesinos tienen más oportunidades de " +
            "brillar, especialmente Akali. Con las nuevas mecánicas de daño y movilidad, siento que la estrategia en mid se volvió mucho más interesante."
    },
    {
        usuario: "TelaShaco",
        icono: powder,
        comentario: "El parche T1.25.2 arruinó mi campeón favorito. Necesita un hotfix urgente!!! Antes, Jinx podía dominar el juego tardío con facilidad, " +
            "pero ahora siento que su velocidad de ataque y daño han sido reducidos de una manera injusta. Otras mejoras en campeones menos utilizados eran necesarias, " +
            "pero esto fue un golpe duro para los main ADC, que de por sí ya era un rol en decadencia."
    },
    {
        usuario: "Adolf Heimerdinger",
        icono: gangplank,
        comentario: "Me encanta la nueva jugabilidad de la jungla. Los cambios a los campamentos han hecho que farmear " +
            "sea más eficiente y menos frustrante. También noto que hay más incentivos para invadir la jungla enemiga, lo que crea un juego más " +
            "agresivo y con mayor interacción."
    },
    {
        usuario: "ArcaneLover_Radbar",
        icono: ekko,
        comentario: "¿Soy yo o la versión 14.5 hizo a los ADCs aún más débiles? Antes ya sufrían contra los asesinos y ahora con la reducción de " +
            "escalado, la fase de líneas es un infierno. Si no tienes un buen soporte, es prácticamente imposible escalar bien al late game. " +
            "Creo que deberían darles más herramientas de supervivencia en el próximo parche, o al menos mejorar su sustain."
    },
    {
        usuario: "TengoSett",
        icono: jinx,
        comentario: "El modo Gladiadores es lo mejor que han añadido en años. ¡Gran trabajo Riot! Este nuevo modo de juego le da un giro interesante a las partidas" +
            " normales. Espero que lo mantengan y no lo eliminen como hicieron con otros modos pasados..."
    },
    {
        usuario: "FF15PLS",
        icono: lux,
        comentario: "¡Este parche es un desastre! Los cambios en la jungla destruyeron completamente la meta actual. " +
            "Ahora los campeones de early game no tienen oportunidad de competir con los nuevos buffs a los tanques. Se supone que la jungla " +
            "debería ser una zona de impacto en el mapa, pero ahora se siente como un rol de farmeo hasta el minuto 15. Necesitamos un hotfix urgente o el balance del juego estará roto por semanas."
    }
];


const Comunidad = () => {
    const [mostrarImagenes, setMostrarImagenes] = useState(false);
    const [mostrarForo, setMostrarForo] = useState(false);

    const buttonClickForo = () => {
        setMostrarForo(!mostrarForo);
    };

    const buttonClick = () => {
        setMostrarImagenes(!mostrarImagenes);
    };

    return (
        <div className="comunidad-container">
            <div className="contenido-comunidad">
                <h1 className="comunidad-title"> COMUNIDAD </h1>
                <h2 className="bienvenida-title"> ¡Bienvenid@ al apartado de Comunidad! </h2>

                {/* Centrar y espaciar botones */}
                <div className="botones-container">
                    <button className="actualizaciones-comunidad" onClick={buttonClick}>
                        {mostrarImagenes ? "Ocultar Actualizaciones" : "Mostrar Actualizaciones"}
                    </button>

                    <button className="foro-comunidad" onClick={buttonClickForo}>
                        {mostrarForo ? "Ocultar Foro" : "Mostrar Foro"}
                    </button>
                </div>

                {/* Sección de imágenes */}
                {mostrarImagenes && (
                    <div className="imagenes-container">
                        <div className="imagen-update">
                            <img src={actualizacionLol} alt="Actualizando" className="imagen-update" />
                            <h3 className="titulo-update"> Notas de la Versión 25.05 </h3>
                            <p className="parrafo-update"> Un nuevo retador aparece... ⚔️ ¡Es la versión 25.05!</p>
                        </div>

                        <div className="imagen-update">
                            <img src={actualizando} alt="Actualizando" className="imagen-update" />
                            <h3 className="titulo-update"> ¡Cambios en la Jungla! Actualizando 14.5</h3>
                            <p className="parrafo-update"> Conoce los nuevos cambios a la jungla. ¡No son pocos! </p>
                        </div>

                        <div className="imagen-update">
                            <img src={notasVersion} alt="Actualizando" className="imagen-update" />
                            <h3 className="titulo-update"> Notas de la versión 2025.T1.3</h3>
                            <p className="parrafo-update"> Disfruta del banquete con la versión 2025.T1.3 </p>
                        </div>

                        <div className="imagen-update">
                            <img src={notasVersion2} alt="Actualizando" className="imagen-update" />
                            <h3 className="titulo-update"> Conoce el nuevo parche T1.25.2 </h3>
                            <p className="parrafo-update"> ¡Inclínense ante la versión 25.T1.2! 👑 </p>
                        </div>
                    </div>
                )}

                {/* Sección del foro */}
                {mostrarForo && (
                    <div className="foro-container">
                        <h3 className="foro-title"> League of Foro </h3>
                        <div className="foro-scroll">
                            {opinionesIniciales.map((opinion, index) => (
                                <div key={index} className="opinion">
                                    <div className="opinion-header">
                                        <img src={opinion.icono} alt="Ícono de invocador" className="opinion-icon"/>
                                        <h4 className="opinion-usuario">{opinion.usuario}</h4>
                                    </div>
                                    <p className="opinion-texto">{opinion.comentario}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comunidad;