import axios from "axios";

class ProductsController {
  static async getAllProducts(setProducts) {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v0.1/shop/products"
      );      
      const products = response.data.payload;

      if (response.status === 200) {
      setProducts(products);

      // debug debug
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  }

  static async uploadImage(base64) {
    try {
      const response = await axios
        .post("http://127.0.0.1:8000/api/v0.1/test/upload_image", {
          base64: base64,
          item_id: 0,
        })
  
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
export default ProductsController;
