import React , {useEffect, useState} from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Logo from "../../Assets/logos/snackies-logo-orange-nobg.webp";

import NotificationIcon from "../../Assets/Icons/admin-bell-solid-full (2).svg";
import UserIcon from "../../Assets/Icons/admin-user-solid-full (1).svg";

import UserController from "../../Controllers/UserController";
import ProductsController from "../../Controllers/ProductsController";
import OrderController from "../../Controllers/OrderController";
import './style.css';

const AdminDashboard = () => {

    const [currentLink, setCurrentLink] = useState('products');

    const [usersState, setUsersState] = useState([]);
    const [productsState, setProductsState] = useState([]);
    const [ordersState, setOrdersState] = useState([]);

    const changeCurrentLink = (Link) => {
        setCurrentLink(Link);
    }

    const fetchUsers = async () => {
        const users = await UserController.getAllUsers();
        setUsersState(users);
    }

    const fetchProducts = async () => {
        await ProductsController.getAllProducts(setProductsState);
    }   

    // const fetchOrders = async () => {
    //     const orders = await OrderController.getAllOrders();
    //     console.log("test");
    // }


    useEffect (() => {
        fetchUsers();
        fetchProducts();
        // fetchOrders();
    }, []);

    return ( 

        <div>
            
            <div className="header display-row ">
                
                <img src={Logo} alt="" className="admin-logo"/>

                <input type="text" placeholder="Search" className="admin-search-bar"/>

                <div className="admin-header-right-side">
                    <img src={NotificationIcon} alt="" className="admin-notification-icon"/>

                    English

                    <img src={UserIcon} alt="" className="admin-user-icon"/>

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
                        onClick={() => changeCurrentLink('clients')}
                        >
                        Clients
                    </button>

                    <button
                        className="admin-container-link"
                        onClick={() => changeCurrentLink('order_lists')}
                        >
                        Order Lists
                    </button>

                </div>


                <div className="admin-table table">
                    
                        {currentLink === "clients" && 
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
                        }

                        {currentLink === "products" && 
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Description</th>
                                </tr>

                                <tbody>
                                    {productsState.map((product) => (
                                        <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.description}</td>
                                        
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        }

                        {currentLink === "order_lists" && 
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

                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        }

                </div>

            </div>

        </div>
     );
}
 
export default AdminDashboard;