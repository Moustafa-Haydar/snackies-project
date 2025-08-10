import React, {useState, useEffect, useContext} from 'react';
import Header from '../../Components/Header/Header';
import Notification from "../../Components/Notification/Notification";
import NotifController from "../../Controllers/NotifController";
import { TokenContext } from "../../Contexts/TokenContext";
import TokenController from "./../../Controllers/TokenController";
import './style.css';

const Notifications = () => {

    const [userState, setUserState] = useState(null);
    const [notifState, setNotifState] = useState([]);
    const { tokenState } = useContext(TokenContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(userState);
        console.log(tokenState)
        if (userState && tokenState)
            getNotif();
    }, [userState, tokenState]);

    const getNotif = async () => {
        try {
        setLoading(true);

        const notifs = await NotifController.getNotifs(tokenState, userState.id);

        // test
        console.log(`Notifications are: ${notifs}`);

        setNotifState(notifs);
        } catch(error) {
        console.log("Failed to fetch notifications: ", error);
        } finally {
            setLoading(false);
        }
    };

    // Decode token and get user info
    useEffect(() => {
        TokenController.decodeToken(tokenState, setUserState);
    }, [tokenState]);

    const markAsRead = (id) => {
        setNotifState(prevNotif => prevNotif.filter(n => n.id !== id));
        NotifController.markAsRead(tokenState, userState.id, id);
    };

    return ( 

        <>
            <Header/>

            <div className="">
                <div className="">
                    <p className="">
                        Your Notifications
                    </p>
                </div>

                {loading ? (
                    <p className="">
                            <p className="loading-text">Loading notifications...</p>
                        </p>
                    ) : (
                        

                        <div className="">
                            {
                            notifState.map((n) => {
                                return (
                                <Notification
                                    key={n.id}
                                    id={n.id}
                                    data={n.data["text"]}
                                    markAsRead={markAsRead}
                                />
                                );
                            })}
                    </div>
                    )
                }
                
            </div>
        
        </>
     );
}
 
export default Notifications;