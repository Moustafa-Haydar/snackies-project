import axios from "axios";
class CartController {
  static async addItemToCart(productId, userId) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/test/add_to_cart",
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
}
export default CartController;
