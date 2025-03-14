import React from 'react';
import "../styles/Chat.css";

const Chat = () => {
    return (
        <div className = "card-container">
            <div className = "card-header">
                <div className = "img-avatar"/>
                <div className = "text-chat"> Mondonguito </div>
            </div>
            <div className = "card-body">
                <div className = "messages-container">
                    <div className = "message-box left">
                        <p> GIOVANY VAQUE </p>
                    </div>
                    <div className = "message-box right">
                        <p> LAGALTIJA IGUANA LAGALTO </p>
                    </div>
                </div>
                <div className = "message-input">
                    <form>
                        <textarea placeholder = "Escribe..." className="message-send" defaultValue={""} />
                        <button type = "submit" className = "button-send"> Enviar </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;