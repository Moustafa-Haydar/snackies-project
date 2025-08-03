import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";



import { TokenContext } from "../../Contexts/TokenContext";

import CartController from "../../Controllers/CartController";
import StarRating from "../../Components/StarReview/StarReview";
import TokenController from "../../Controllers/TokenController";

const ProductPage = ({
  productId,
  productImage,
  productName,
  productRating,
  productPrice,
  productDetails,
}) => {
  const { tokenState } = useContext(TokenContext);
  const [ userState, setUserState ] = useState(null);

  useEffect( () => {
        TokenController.decodeToken(tokenState, setUserState);
    }, [tokenState]);

  const addItemCart = () => {
    console.log("adding this item to cart");
    CartController.addItemToCart(productId, userState.id);
  };

  return (
    <div>
      <Header />

      <div className="flex product-page-content">
        <div className="flex product-page-image-div">
          <img
            className="product-page-image"
            src={productImage}
            alt="Product"
          ></img>
        </div>

        <div className="flex column product-page-info">
          <div className="flex column product-page-info-title">
            <h1>{productName}</h1>

            <StarRating rating={productRating} />
          </div>

          <h3 className="product-page-info-price">{productPrice}</h3>

          <Button btn_name={"Add to Cart"} onClick={addItemCart} />

          <div>
            <div>
              <p>Add to Favorites</p>
            </div>

            <p>This is a gift</p>
          </div>

          <div>
            <h4>Product Details</h4>

            <p>{productDetails}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
