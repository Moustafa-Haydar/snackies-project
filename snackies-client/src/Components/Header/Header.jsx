import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div className='header-text'>
                <p>A snack a day keeps the hunger away!</p>
            </div>
            <div className='header'>
                <div className='logo-section'>
                    <Link className='logo-link' to="/">
                        <img src="images/logo.jpg" alt="logo" className='logo-img'/>
                    </Link>
                </div>
                <div className='nav-section'>
                    <Navbar/>
                </div>
                <div className='icons-section'>
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" onClick={() => navigate('/login')} />
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" onClick={() => navigate('/cart')} />
                </div>
            </div>
        </header>
    );
}

export default Header;
