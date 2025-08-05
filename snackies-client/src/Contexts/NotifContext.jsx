import { createContext, useState } from "react";

// Token Provider
// store a user's auth token
// provide access to it across the app
// allow updates (e.g., login, logout)

export const NotifContext = createContext();

const NotifProvider = ({ children }) => {
    const [notifState, setNotifState] = useState(
        localStorage.getItem('token') || null);
    const [notifNumState, setNotifNumState] = useState(0);

    // const saveToken = (newToken) => {
    //     setTokenState(newToken);
    //     localStorage.setItem('token', newToken);
    // };

    // const clearToken = () => {
    //     setTokenState(null);
    //     localStorage.removeItem('token');
    // };

    return (
        <NotifContext.Provider value={{ notifState }}>
            {children}
        </NotifContext.Provider>
    );
};

export default NotifProvider;