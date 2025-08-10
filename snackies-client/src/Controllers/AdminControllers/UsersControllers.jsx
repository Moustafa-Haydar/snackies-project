import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v0.1/admin";

class UsersController {

    

    static async getAllUsers(setUsersState, token) {
        try {

            const response = axios.get(`${BASE_URL}/users`,
                {
                    headers: {
                    Authorization: `Bearer ${token}`,
                },
                }
            );
            const users = (await response).data.payload;
            setUsersState(users);
            
            return users;
        } catch (error) {
            console.error(error);
            return;
        }
    }

}

export default UsersController;


