import axios from "axios";

class CategoriesController {
  static async getAllCategories(setCategories) {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v0.1/shop/categories');
      const categories = response.data.payload;

      if (response.status === 200) {
        setCategories(categories);

         // debug
        console.log(categories);
      } else {
        console.error(`Error fetching categories: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching categories: ${error.message}`);
    }
  }
}

export default CategoriesController;