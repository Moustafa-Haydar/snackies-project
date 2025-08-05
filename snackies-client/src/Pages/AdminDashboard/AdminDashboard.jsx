import React , {useEffect, useState} from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Logo from "../../Assets/logos/snackies-logo-orange-nobg.webp";
import NotificationIcon from "../../Assets/Icons/bell-solid-full.svg";
import UserIcon from "../../Assets/Icons/user.svg";
import UserController from "../../Controllers/UserController";

import './style.css';

const AdminDashboard = () => {

    const [currentLink, setCurrentLink] = useState('account');
    const [usersState, setUsersState] = useState([]);

    const changeCurrentLink = (Link) => {
        setCurrentLink(Link);
    }

    const fetchUsers = async () => {
        const users = await UserController.getAllUsers();
        setUsersState(users);
    }

    useEffect (() => {
        fetchUsers();
    }, []);

    return ( 

        <div>
            
            <div className="header display-row ">
                
                <img src={Logo} alt="" className="admin-logo"/>

                <input type="text" placeholder="Search" className="admin-search-bar"/>

                <div className="admin-header-right-side">
                    <img src={NotificationIcon} alt="" className="admin-notification-icon"/>

                    English

                    <img src={UserIcon} alt="" className="admin-notification-icon"/>

                    <p>Hiba</p>
                </div>

            </div>

            <div className="admin-body display-row">

                <div className="admin-left-side admin-container-left-links display-column">

                    <button
                        className="admin-container-link"
                        onClick={() => changeCurrentLink('products')}
                        >
                        Products
                    </button>

                    <button
                        className="admin-container-link"
                        onClick={() => changeCurrentLink('order_lists')}
                        >
                        Order Lists
                    </button>

                    <button
                        className="admin-container-link"
                        onClick={() => changeCurrentLink('clients')}
                        >
                        Clients
                    </button>

                </div>


                <div className="admin-table table">
                    
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>First_name</th>
                                <th>Last_name</th>
                                <th>Email</th>
                            </tr>

                            <tbody>
                                {usersState.map((user) => (
                                    <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                </div>

            </div>

        </div>
     );
}
 
export default AdminDashboard;