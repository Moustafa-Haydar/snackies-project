import axios from "axios";

class AuthController {

    static async login({ user, saveToken, navigate, url}) {

         try {

            const response = await axios
            .post("http://127.0.0.1:8000/api/v0.1/guest/login", user);

            const user_token = response.data.payload.token;               
            saveToken(user_token);
            navigate(url);

        } catch (error) {
            const message ="Login failed. Please try again.";
            console.log(error.response.data);
            throw new Error(message);
        }
    }

    static async register({ new_user, navigate }) {
        try {
            await axios.post(
                "http://127.0.0.1:8000/api/v0.1/guest/register",
                new_user
            );

            navigate("/Login");

        } catch (error) {
            const message =
                error.response?.data?.message || "Register failed. Please try again.";
                throw new Error(message); 
        }
}


}

export default AuthController;