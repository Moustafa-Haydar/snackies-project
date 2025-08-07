import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v0.1/admin";

class OrderController {

    static async getAllOrders() {
        try {

            const response = axios.get(`${BASE_URL}/orders`);
            const products = (await response).data.payload;

            console.log(products);
            
            return products;

        } catch (error) {
            console.error(error);
            return;
        }
    }


}

export default OrderController;