import {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import Logo from "../../../Assets/logos/snackies-logo-orange-nobg.webp";

import { TokenContext } from "../../../Contexts/TokenContext";
import AdminAuthController from '../../../Controllers/AdminControllers/AdminAuthController';
import './style.css';

const AdminLogin = () => {

    const { saveToken } = useContext(TokenContext);

    const [ emailState, setEmailState ] = useState("");
    const [ passwordState, setPasswordState ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ loginMsg, setLoginMsg ] = useState("Enter Email & Password");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e?.preventDefault?.();   

        if ( !emailState || !passwordState ) {
            // this works and rerender
            setLoginMsg("Please enter both email and password.");
            return;
        }

        setLoading(true);

        try {
            const user = {
                email : emailState,
                password : passwordState
            };

            await AdminAuthController.login({user, saveToken, navigate, url: "/adminPages"});
        
        } catch (err) {
            setLoginMsg(err?.message || "Login failed. Please try again.");
            console.log(err.message);
        
        } finally {
            setLoading(false);
        }
    };

    return ( 
        <div>
            
            <div className="header display-row ">
                <img src={Logo} alt="" className="admin-logo"/>
            </div>


            <div className="admin-login">

                <div className="admin-login-form">

                    <p className="admin-loginMsg">{loginMsg}</p>

                    <Input label={"Email"} name={"email"} placeholder={"Enter email here"} 
                        onChange={(e) => setEmailState(e.target.value)} />

                    <Input label={"Password"} name={"password"} placeholder={"Enter password here"}  type={"password"}
                        onChange={(e) => setPasswordState(e.target.value)}/>

                    <Button btn_name={"Submit"} type="button" onClick={handleLogin}/>

                </div>

            </div>

            {loading && (
                <div>loading...</div>
            )}

        </div>
    );
}

export default AdminLogin;