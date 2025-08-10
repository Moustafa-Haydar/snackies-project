import axios from "axios";

class AdminAuthController {

    static async login({ user, saveToken, navigate, url}) {

        try {
            const response = await axios
            .post("http://127.0.0.1:8000/api/v0.1/guest/login", user);

            const logged_user = response.data.payload;

            if ( logged_user['role'] === 'admin' ) {
                const user_token = response.data.payload.token;               
                saveToken(user_token);
                navigate(url);
            }

        } catch (error) {
            console.log("Login failed!");
            console.log(error.response.data);
            throw error.response.data;
        }
    }

}

export default AdminAuthController;