import axios from "axios";
class CartController {
  
  static async addItemToCart(productId, userId, token) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/user/add_to_cart",
        {
          user_id: userId,
          item_id: productId,
        },
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

  static async getCart(userId, setCartItems, token) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v0.1/user/get_cart/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
