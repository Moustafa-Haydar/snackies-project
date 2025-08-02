import React from 'react';
import './style.css';
import snackiesLogo from '../../Assets/logos/snackies-logo-orange-nobg.webp';
import { Link, useNavigate } from 'react-router-dom'

const Footer = () =>{
    return(
        <footer className='footer-container'>
            <div className='main-footer'>
                <div className='about-us-section'>
                    <h3><Link to="/about-us">About</Link></h3>
                     <Link className='logo-link' to="/">
                        <img src={snackiesLogo} alt="logo" className='footer-logo'/>
                    </Link>
                    <p>Learn more about our mission, and some frequently asked questions!</p>
                </div>
                <div className=' shop-section'>
                    <h3><Link to='/shop'>Shop</Link></h3>
                    <Link to="/shop/cheesy">Cheesy</Link>
                    <Link to="/shop/chocolaty">Chocolaty</Link>
                    <Link to="/shop/nutty">Nutty</Link>
                </div>
                <div className='socials-section'>
                    <h3>Socials</h3>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Youtube</p>
                </div>
                <div className='profile-section'>
                    <h3><Link to='/profile'>Profile</Link></h3>
                    <Link to='/profile'>Your Profile</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/checkout'>Checkout</Link>
                </div>
            </div>
        </footer>
    );
}
export default Footer;