import { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./TokenContext";
import TokenController from "../Controllers/TokenController";

// Notif provider to show if there are unread notifications

export const NotifContext = createContext();

const NotifProvider = ({ children }) => {
  // const saveToken = (newToken) => {
  //     setTokenState(newToken);
  //     localStorage.setItem('token', newToken);
  // };

  // const clearToken = () => {
  //     setTokenState(null);
  //     localStorage.removeItem('token');
  // };

  return (
    <NotifContext.Provider value={{}}>
      {children}
    </NotifContext.Provider>
  );
};

export default NotifProvider;
