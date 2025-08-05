import React, { useEffect, useState, useContext } from "react";
import Chatbot from '../Chatbot/Chatbot.jsx';
import TokenController from "../../Controllers/TokenController.jsx";
import { TokenContext } from "../../Contexts/TokenContext.jsx";
import botIcon from '../../Assets/Icons/robot-solid-full.svg';
import xIcon from '../../Assets/Icons/x-solid-full.svg';
import './style.css';

const Chatbtn = () => {
    const [userState, setUserState] = useState(null);
    const { tokenState } = useContext(TokenContext);

    useEffect(() => {
        if (tokenState) {
            TokenController.decodeToken(tokenState, setUserState);
        }
    }, [tokenState]);

    const [isChatbotVisible, setIsChatbotVisible] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };
    
    const userId = userState ? userState.id : null;

    return (
        <div className="chatbot-container">
            {isChatbotVisible && (
                <div className="chatbot-window">
                    <Chatbot userId={userId} />
                </div>
            )}
            <div onClick={toggleChatbot} className="chatbot-toggle">
                <img src={isChatbotVisible ? xIcon : botIcon} alt={isChatbotVisible ? "Close Chat" : "Open Chat"} />
            </div>
        </div>
    );
};

export default Chatbtn;