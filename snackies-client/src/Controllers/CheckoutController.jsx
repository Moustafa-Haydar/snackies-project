import axios from "axios";

class CheckoutController {
  static async placeOrder(userId) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v0.1/guest/place_order/${userId}`
      );

      // debug
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
export default CheckoutController;
