import axios from "axios";

class ProductsController {
  static async getAllProducts(setProducts) {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v0.1/shop/products');
      
      const products = response.data.payload;
      setProducts(products);

      // debug
      console.log(products);

    } catch (error) {
      console.log(error);
    }
  }
}
export default ProductsController;