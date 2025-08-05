import React ,{useState, useEffect} from "react";
import botIcon from '../../Assets/Icons/robot-solid-full.svg';
import arrowDown from '../../Assets/Icons/circle-arrow-down-solid-full.svg';
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import './style.css';
import ChatbotController from '../../Controllers/ChatbotController';

const Chatbot =({ userId }) =>{
    const [chatHistory, setChatHistory] = useState([]);
    
    const getBotResponse = async (userMessage) => {
        try {
            const response = await ChatbotController.sendChatbotMessage(userId, userMessage);
            
            const botMessage = response.data[0].output; 
            
            console.log(response);
            console.log(response.data)
            console.log(botMessage);
            return botMessage;
            
        } catch (error) {
            console.error('Failed to get bot response:', error);
            return "Sorry, I'm having trouble connecting right now. Please try again later.";
        }
    };

    useEffect(() => {
        const lastMessage = chatHistory[chatHistory.length - 1];

        if (lastMessage && lastMessage.role === "user") {
            getBotResponse(lastMessage.text)
                .then(botResponse => {
                    setChatHistory(prevHistory => [
                        ...prevHistory,
                        { role: "model", text: botResponse }
                    ]);
                })
                .catch(error => {
                    setChatHistory(prevHistory => [
                        ...prevHistory,
                        { role: "model", text: "Sorry, I'm having trouble connecting right now. Please try again later." }
                    ]);
                });
        }
    }, [chatHistory, userId]);


    return (
        <div className="chatbot-container">
            <div className="chatbot-popup">
                <div className="chat-header">
                    <div className="header-info">
                        <img src={botIcon} alt="Chatbot Icon" />
                        <h2 className="logo-text">Snackies-LB chatbot</h2>
                    </div>
                    <button className="arrow-chatbot">
                        <img src={arrowDown} alt="Close" />
                    </button>
                </div>
                <div className="chat-body">
                    <div className="message bot-message">
                        <img src={botIcon} alt="Chatbot Icon" />
                        <p className="message-text">
                            Hey there 👋 <br /> How can I help you today?
                        </p>
                    </div>
                    {chatHistory.map((chat, index) =>(
                        <ChatMessage key={index} chat={chat}/>
                    ))}
                </div>

                <div className="chat-footer">
                    <ChatForm setChatHistory= {setChatHistory}/>
                </div>
            </div>
        </div>
    );
};
export default Chatbot;
