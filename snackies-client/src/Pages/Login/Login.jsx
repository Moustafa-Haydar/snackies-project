import {useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import AuthController from'../../Controllers/AuthController';
import './style.css';
import Header from '../../Components/Header/Header';
import { TokenContext } from '../../Contexts/TokenContext';

const Login = () => {

    const { saveToken } = useContext(TokenContext);
    const navigate = useNavigate();
    const [ResponseMessage, setResponseMessage] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlelogin = async () => {
        
        const user = { email, password };


        
        try {
            await AuthController.login({user, saveToken, navigate, url: '/'});
        } catch (error) {
            setResponseMessage(error.message || "Login failed. Please try again.");
        }
    }

    return ( 

        <div>
            
        <Header/>


        
        <div className='login-container background display-column'>

            
            <div className="login">

                <h1 className='login-title'>Login</h1>

                <div className="response-message">
                    {ResponseMessage}
                </div>

                <div className="login-inputs display-column">
                    

                    <Input
                        label="Email"
                        type="text"
                        value={email}
                        placeholder="Enter your email address"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        placeholder="Enter a password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>

                    <div className="login-btn">
                        <Button btn_name="Login" type='primary'
                            onClick={handlelogin}/>
                        <p>Don't have an account? 
                            <span className='register-register-link'
                            onClick={() => navigate('/register')}>Register</span>
                            </p>
                    </div>

            </div>

        </div>
        
        </div>

     );
}
 
export default Login;