import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import CartController from "../../Controllers/CartController";
import favFull from "../../Assets/icons/heart-solid-full.svg";
import favEmpty from "../../Assets/icons/heart-regular-full.svg";

import "./style.css";

const ProductPage = ({
  productId,
  productImage,
  productName,
  productRating,
  productPrice,
  productDetails,
}) => {
    const [favorite, setFavorite] = useState(favEmpty);
    const [gift, setGift] = useState();

  const addItemCart = () => {
    console.log("adding this item to cart");
    CartController.addItemToCard();
  };

  const addFavorite = () => {
    if (favorite == favEmpty) {
        console.log("Adding this item to favorites");
        setFavorite(favFull);
    } else {
        console.log("Removing Item from Favorites");
        setFavorite(favEmpty);
    }
  }

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

            <p>{productName}</p>
          </div>

          <h3 className="product-page-info-price">{productPrice}</h3>

          <Button btn_name={"Add to Cart"} onClick={addItemCart} />

          <div className="flex column product-page-info-buttons">
            <button onClick={addFavorite}>
              <div className="flex">
                <img className="product-page-icon" src={favorite} alt="Favorite this item"></img>
                <p>Add to Favorites</p>
              </div>
            </button>

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
