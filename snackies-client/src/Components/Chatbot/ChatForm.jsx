import React , { useRef } from "react";
import arrowUp from '../../Assets/Icons/circle-arrow-up-solid-full.svg';

const ChatForm= ({setChatHistory}) =>{
    const inputRef =useRef();

    const handleFormSubmit =(e) =>{
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value ="";
        
        setChatHistory((history) => [...history, {role: "user",  text:userMessage}]);
}
    return(
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input 
            type="text"
            placeholder="How can I help you?"
            className="message-input" 
            required 
            ref={inputRef}/>

            <button className="arrow-chatbot">
                <img src={arrowUp} alt="Send" />
            </button>
        </form>
    );
}
export default ChatForm;