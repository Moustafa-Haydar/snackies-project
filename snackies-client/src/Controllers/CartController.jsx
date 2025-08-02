import axios from "axios";

class CartController {
  static async addItemToCard () {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v0.1/test/add_to_cart');

      // debug
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  }
}
export default CartController;