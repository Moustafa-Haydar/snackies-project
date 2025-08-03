import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './style.css';
import TokenController from './../../Controllers/TokenController';
import { TokenContext } from '../../Contexts/TokenContext';
import Button from '../../Components/Button/Button';
import UserAccountInput from '../../Components/UserAccountInput/UserAccountInput';
import UserController from '../../Controllers/UserController';

const Profile = () => {

    // account, order_history, favorites
    const navigate = useNavigate();
    const { tokenState, clearToken } = useContext(TokenContext);

    const [currentLink, setCurrentLink] = useState('account');
    const [ userState, setUserState ] = useState(null);
    
    const [firstNameState, setFirstNameState] = useState('');
    const [lastNameState, setLastNameState] = useState('');
    const [emailState, setEmailState] = useState('');

    // Decode token and get user info
    useEffect( () => {
        TokenController.decodeToken(tokenState, setUserState);
    }, [tokenState]);

    useEffect(() => {
        console.log("userState changed:", userState);

        if (userState) {
            setFirstNameState(userState.first_name || '');
            setLastNameState(userState.last_name || '');
            setEmailState(userState.email || '');
        }

    }, [userState]);

    const handleSaveChanges = async () => {

        if (!userState) return;
        
        try {
            const user = await UserController.updateUser(tokenState, userState.id, {
                first_name: firstNameState,
                last_name: lastNameState,
                email: emailState,
            });

            setUserState(prev => ({
                ...prev,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
            }));

            console.log("User updated successfully!");

        } catch (error) {
            console.log("Failed to update user");
        }
    };

    const changeCurrentLink = (Link) => {
        setCurrentLink(Link);
    }

    const logout = () => {
        setUserState();
        clearToken();
        navigate('');
    };

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

                    <div className='account-container-left-links display-column'>
                        
                        <button
                            className="account-container-link"
                            onClick={() => changeCurrentLink('account')}
                            >
                            Your Account
                        </button>

                        <button
                            className="account-container-link"
                            onClick={() => changeCurrentLink('order_history')}
                            >
                            Order History
                        </button>

                        <button
                            className="account-container-link"
                            onClick={() => changeCurrentLink('favorites')}
                            >
                            Favorites
                        </button>

                    </div>
                    
                </div>

                {currentLink === 'account' && (

                    <div className="account-container-right display-column">

                        <div className="account-container-right-title-container">
                            <p className='account-container-right-title'>
                                Your Information
                            </p>
                        </div>

                        <div className="account-inputs display-column">

                            <UserAccountInput value={firstNameState} setValue={setFirstNameState} label="First Name"/>
                            <UserAccountInput value={lastNameState} setValue={setLastNameState} label="Last Name"/>
                            <UserAccountInput value={emailState} setValue={setEmailState} label="Email"/>
                            
                            <Button btn_name={"Save Changes"}
                                onClick={() => handleSaveChanges()}/>

                            <Button btn_name={"Logout"}
                                onClick={() => logout()}/>

                        </div>

                    </div>
                )}

            </div>

        </div>

    </div>

</div>

);}
 
export default Profile;