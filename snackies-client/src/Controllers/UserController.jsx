import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v0.1/guest";

class UserController {

    static async updateUser(token, id, userInfo) {
        
        try {

            const response = await axios.post(`${BASE_URL}/update/${id}`, 
                userInfo, 
                {
                    headers: {
                    Authorization: `Bearer ${token}`
                    },
                });
                
            return response.data.payload;

        } catch (error) {
            console.error('Failed to update user', error);
            throw error;
        }
        
    }
}

export default UserController;
