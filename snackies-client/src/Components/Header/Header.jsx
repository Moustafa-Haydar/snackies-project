import React , {useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import './style.css';
import userIcon from '../../Assets/Icons/circle-user-solid-full.svg';
import cartIcon from '../../Assets/Icons/cart-shopping-solid-full.svg';
import snackiesLogo from '../../Assets/logos/snackies-logo-orange-nobg.webp';
import notifInactive from '../../Assets/Icons/notification-inactive.svg';
import { TokenContext } from '../../Contexts/TokenContext.jsx';

const Header = () => {
    const navigate = useNavigate();
    const { tokenState } = useContext(TokenContext);

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
                  
                    <img src={notifInactive} alt="userIcon" 
                        onClick={() => navigate(tokenState? '/profile' : '/login')}/>
                    <img src={userIcon} alt="userIcon" 
                        onClick={() => navigate(tokenState? '/profile' : '/login')}/>

                    {/* <img src={cartIcon} alt="cartIcon" 
                        //onClick={() => navigate(tokenState? '/cart' : '/login')} />
                    //<img src={userIcon} alt="userIcon" 
                        //onClick={() => navigate(tokenState? '/profile' : '/login')}/> */}
                 </div>


            </div>
        </header>
    );
}

export default Header;
