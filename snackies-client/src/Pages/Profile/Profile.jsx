import React from 'react';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';
import './style.css';

const Profile = () => {
return ( 

<div>
    <Header/>

    <div className="profile display-column">
        
        <div className="account-container display-row">
            
            <div className="account-inner-container display-row">

                <div className="account-container-left display-column">

                    <p className='account-container-left-title'>
                        YOUR ACCOUNT
                    </p>   

                    <div className='account-container-left-links'>
                        <p>Your Account</p>
                        <p>Order History</p>
                        <p>Favorites</p>
                    </div>
                    
                </div>

                <div className="account-container-right display-column">

                        <div className="account">
                            <p className='account-container-right-title'>
                                Your Information
                            </p>
                        </div>


                    <Input type="text" label={'First-name'}/>
                    <Input type="text" label={'Last-name'}/>
                    <Input type="text" label={'Email'}/>

                </div>


            </div>

        </div>

    </div>

</div>
);
}
 
export default Profile;