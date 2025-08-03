import axios from "axios";
class CartController {
  static async addItemToCart(productId, userId) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/guest/add_to_cart",
        {
          user_id : userId,
          item_id : productId
        }
      );

      // debug
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  static async getCart(userId, setCartItems) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v0.1/guest/get_cart/${userId}`
      );

      // debug
      console.log(response.data);
      setCartItems(response.data.payload.items);
    } catch (error) {
      console.log(error);
    }
  }
}
export default CartController;
