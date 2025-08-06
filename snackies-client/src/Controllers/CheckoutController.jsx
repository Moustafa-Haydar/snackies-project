import axios from "axios";

class CheckoutController {
  static async placeOrder(userId, token) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v0.1/user/place_order/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      

      // debug
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
export default CheckoutController;
