import { jwtDecode } from 'jwt-decode';

class TokenController {

    static decodeToken(token, setUser) {

        try {
                const decoded = jwtDecode(token);
                const user_info = {
                    'id' : decoded.sub,
                    'first_name': decoded.first_name,
                    'last_name': decoded.last_name,
                    'email': decoded.email,
                }
                setUser(user_info);

        } catch (e) {
            console.log("Invalid token: ", e);
        }
    }

}

export default TokenController;