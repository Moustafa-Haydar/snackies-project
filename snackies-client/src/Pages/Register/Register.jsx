import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import AuthController from'../../Controllers/AuthController';
import './style.css';

const Register = () => {

    const navigate = useNavigate();
    const [ResponseMessage, setResponseMessage] = useState();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        
        const new_user = { first_name, last_name, email, password };

        try {
            const result =  await AuthController.register({new_user, navigate});
        } catch (error) {
            setResponseMessage(error.message || "Register failed. Please try again.");
        }
    }

    return ( 

        <div className='register-container background display-column'>

            <div className="register">

                <h1 className='register-title'>Reigster</h1>

                <div className="response-message">
                    {ResponseMessage}
                </div>

                <div className="register-inputs display-column">
                    <div className="register-name-div display-row">

                    <Input
                        label="First-name"
                        type="text"
                        value={first_name}
                        placeholder="Enter your name"
                        name="firstname"
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <Input
                        label="Last-name"
                        type="text"
                        value={last_name}
                        placeholder="Enter your name"
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                    />

                </div>

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

                <div className="register-btn">
                    <Button btn_name="Register" type='primary'
                        onClick={handleRegister}/>
                    <p>Already have an acount? <span className='register-login-link'>Login</span></p>
                </div>

            </div>

        </div>

     );
}
 
export default Register;