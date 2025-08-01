import axios from "axios";

class ProductsController {
  static async getAllProducts(setProducts) {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v0.1/shop/products');
      const products = response.data.payload;

      if (response.status === 200) {
      setProducts(products);

      // debug debug
      console.log(products);

    }else{
       console.error(`Error fetching products: ${response.status}`);
    }}
     catch (error) {
      console.log( console.error(`Error fetching categories: ${error.message}`));
    }
  }
}
export default ProductsController;