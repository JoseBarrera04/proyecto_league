import React, { useState } from "react";
import "../styles/Comunidad.css";

// Importar imágenes manualmente
import actualizacionLol from "../images/actualizacionLol.jpg";
import actualizando from "../images/actualizando.jpg";
import notasVersion from "../images/notasVersion.jpg";
import notasVersion2 from "../images/notasDeVersion.jpg";

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
                <h1 className="comunidad-title">COMUNIDAD</h1>
                <h2 className="bienvenida-title">¡Bienvenid@ al apartado de Comunidad!</h2>

                {/* Centrar y espaciar botones */}
                <div className="botones-container">
                    <button className="actualizaciones-comunidad" onClick={buttonClick}>
                        {mostrarImagenes ? "Ocultar Actualizaciones" : "Mostrar Actualizaciones"}
                    </button>

                    <button className="foro-comunidad" onClick={buttonClickForo}>
                        {mostrarForo ? "Ocultar Foro" : "Mostrar Foro"}
                    </button>
                </div>

                {/* Sección de imágenes, solo se muestra si mostrarImagenes es true */}
                {mostrarImagenes && (
                    <div className="imagenes-container">

                        <div className="imagen-update">
                            <img src={actualizacionLol} alt="Actualizando" className="imagen-update" />
                            <h3 className={"titulo-update"}> Notas de la Versión 25.05 </h3>
                            <p className={"parrafo-update"}> Un nuevo retador aparece... ⚔️ ¡Es la versión 25.05!</p>
                        </div>

                        <div className="imagen-update">
                            <img src={actualizando} alt="Actualizando" className="imagen-update" />
                            <h3 className={"titulo-update"}> ¡Cambios en la Jungla! Actualizando 14.5</h3>
                            <p className={"parrafo-update"}> Conoce los nuevos cambios a la jungla. ¡No son pocos! </p>
                        </div>

                        <div className={"imagen-update"}>
                            <img src={notasVersion} alt="Actualizando" className="imagen-update" />
                            <h3 className={"titulo-update"}> Notas de la versión 2025.T1.3</h3>
                            <p className={"parrafo-update"}> Disfruta del banquete con la versión 2025.T1.3 </p>
                        </div>

                        <div className={"imagen-update"}>
                            <img src={notasVersion2} alt="Actualizando" className="imagen-update" />
                            <h3 className={"titulo-update"}> Conoce el nuevo parche T1.25.2 </h3>
                            <p className={"parrafo-update"}> ¡Inclínense ante la versión 25.T1.2! 👑 </p>

                        </div>

                    </div>

                )}

                {/* Sección del foro, solo se muestra si mostrarForo es true */}
                {mostrarForo && (
                    <div className="foro-container">
                        <h3>Foro</h3>
                        <p>Contenido del foro</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comunidad;
