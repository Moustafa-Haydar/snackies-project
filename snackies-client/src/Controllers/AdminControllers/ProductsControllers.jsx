import axios from "axios";

class ProductsController {
    static async getAllProducts(setProducts, token) {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/v0.1/admin/products",
                {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                });
                
            const products = response.data.payload;

            if (response.status === 200) {
                setProducts(products);
            } else {
                console.error('Error fetching products:', response.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

        static async uploadImage(base64) {
            try {
                await axios.post(
                    "http://127.0.0.1:8000/api/v0.1/user/upload_image",
                    {
                        base64: base64,
                        item_id: 0,
                    }
                );

            } catch (error) {
                console.log(error);
            }
        }

}

export default ProductsController;
