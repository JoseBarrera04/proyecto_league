import React, { useEffect, useState } from 'react';
import "../styles/Chat.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsCameraVideoFill } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FaCamera, FaMicrophone } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { db } from "../database/firebase.js";
import { collection, addDoc, query, onSnapshot, orderBy, where } from "firebase/firestore";
import { useSelector } from "react-redux";

const Chat = () => {
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);
    const [amigos, setAmigos] = useState([]);
    const [amigoActual, setAmigoActual] = useState(null);

    const user = useSelector((state) => state.auth);

    useEffect(() => {
        if (user.id) {
            const busqueda = query(collection(db, "users", user.id, "amigos"));
            const unsubscribe = onSnapshot(busqueda, (querySnapshot) => {
                const listaAmigo = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    listaAmigo.push({ id: data.amigoId, username: data.username });
                });
                setAmigos(listaAmigo);
            }, (error) => {
                console.error("Error al obtener amigos:", error);
            });
            return () => unsubscribe();
        }
    }, [user.id]);

    useEffect(() => {
        if (amigoActual) {
            const busqueda = query(
                collection(db, "chats"),
                where("chatId", "==", getChatId(user.id, amigoActual.id)),
                orderBy("timestamp", "asc")
            );
            const unsubscribe = onSnapshot(busqueda, (querySnapshot) => {
                const mensajesChat = [];
                querySnapshot.forEach((doc) => {
                    mensajesChat.push(doc.data());
                });
                setMensajes(mensajesChat);
            }, (error) => {
                console.error("Error al obtener mensajes:", error);
            });
            return () => unsubscribe();
        }
    }, [amigoActual, user.id]);

    const getChatId = (userId1, userId2) => {
        return userId1 < userId2 ? `${userId1}_${userId2}` : `${userId2}_${userId1}`;
    };

    const mandarMensaje = async () => {
        if (mensaje.trim() !== "" && amigoActual) {
            try {
                await addDoc(collection(db, "chats"), {
                    chatId: getChatId(user.id, amigoActual.id),
                    senderId: user.id,
                    receiverId: amigoActual.id,
                    mensaje: mensaje,
                    timestamp: new Date(),
                });
                setMensaje("");
            } catch (error) {
                console.error("Error al enviar mensaje:", error);
            }
        }
    };

    return (
        <div className="parent">
            <div className="usuario">
                <img className="img-usuario" src="src/images/ZeriP.jpg" />
                <h6>{user.username || "Usuario"}</h6>
                <HiDotsHorizontal />
                <BsCameraVideoFill />
            </div>

            <div className="lista-amigos">
                <div className="amigos">
                    <div className="amigo">
                        {amigos.map((amigo) => (
                            <div key={amigo.id} className="amigo" onClick={() => setAmigoActual(amigo)}>
                                <img className="img-amigo" src="src/images/icons/ekko.jpg" />
                                <div>
                                    <h6>{amigo.username}</h6>
                                    <p>Sale aram o que</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="div3">
                {amigoActual ? `Chat con ${amigoActual.username}` : "Selecciona a Alguien para lolsito"}
            </div>

            <div className="div4">
                {mensajes.map((mensaje, index) => (
                    <div key={index} className={`mensaje ${mensaje.senderId === user.id ? "sent" : "received"}`}>
                        <p>{mensaje.mensaje}</p>
                    </div>
                ))}
            </div>

            <div className="barra-mensajes">
                <CiImageOn />
                <FaCamera />
                <FaMicrophone />
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                />
                <MdEmojiEmotions />
                <button type="button" onClick={mandarMensaje}> Enviar </button>
            </div>

            <div className="div6">Perfil Amigo</div>
            <div className="div7">Opciones Chat</div>
        </div>
    );
};

export default Chat;