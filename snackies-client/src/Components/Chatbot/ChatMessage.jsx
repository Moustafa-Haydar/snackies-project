import React from "react";
import botIcon from '../../Assets/Icons/robot-solid-full.svg';

const ChatMessage = ({chat}) =>{
    return(
        <div className={`message ${chat.role === "model"? 'bot':'user'}-message`}>
            {chat.role === "model"&& <img src={botIcon} alt="Chatbot Icon" />}
            <p className="message-text">{chat.text}</p>
        </div>
    );

};
export default ChatMessage;