import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import './style.css';
import userIcon from '../../Assets/icons/user.svg';
import cartIcon from '../../Assets/icons/cart-shopping.svg';
import snackiesLogo from '../../Assets/logos/snackies-logo-orange-nobg.webp';

const Header = () => {
    const navigate = useNavigate();

    
    return (
        <header className="header-section">
            <div className='header-text'>
                <p>A snack a day keeps the hunger away!</p>
            </div>
            <div className='header-content'>
                <div className='logo-section'>
                    <Link className='logo-link' to="/">
                        <img src={snackiesLogo} alt="logo" className='logo-img'/>
                    </Link>
                </div>
                <div className='nav-section'>
                    <Navbar/>
                </div>
                <div className='icons-section'>
                    <img src={userIcon} alt="userIcon" onClick={() => navigate('/login')}/>
                    <img src={cartIcon} alt="cartIcon" onClick={() => navigate('/cart')} />
                 </div>
            </div>
        </header>
    );
}

export default Header;
