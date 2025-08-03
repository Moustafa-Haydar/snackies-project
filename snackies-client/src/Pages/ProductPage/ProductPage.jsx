import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, Bounce, toast } from "react-toastify";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

import heartFull from "../../Assets/Icons/heart-solid.svg";
import heartEmpty from "../../Assets/Icons/heart-outline.svg";
import giftFull from "../../Assets/Icons/square-solid.svg";
import giftEmpty from "../../Assets/Icons/square-outline.svg";

import { TokenContext } from "../../Contexts/TokenContext";

import CartController from "../../Controllers/CartController";
import StarRating from "../../Components/StarReview/StarReview";
import TokenController from "../../Controllers/TokenController";

import "./style.css";

const ProductPage = ({
  productId,
  productImage,
  productName,
  productRating,
  productPrice,
  productDetails,
}) => {
  const { tokenState } = useContext(TokenContext);
  const [userState, setUserState] = useState(null);

  const [favIcon, setFavIcon] = useState(heartEmpty);
  const [giftIcon, setGiftIcon] = useState(giftEmpty);

  const currentProduct = JSON.parse(localStorage.getItem("currentProduct"));

  useEffect(() => {
    TokenController.decodeToken(tokenState, setUserState);
  }, [tokenState]);

  const addItemCart = () => {
    console.log("Adding this item to cart");
    CartController.addItemToCart(currentProduct.productId, userState.id);
    toast.info(currentProduct.productName + " added to cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const swapFav = () => {
    if (favIcon == heartEmpty) {
      console.log("Adding to Favorites");
      setFavIcon(heartFull);
    } else {
      console.log("Removing to Favorites");
      setFavIcon(heartEmpty);
    }
  };

  const swapGift = () => {
    if (giftIcon == giftEmpty) {
      console.log("This is a gift");
      setGiftIcon(giftFull);
    } else {
      console.log("This is not a gift");
      setGiftIcon(giftEmpty);
    }
  };

  return (
    <div>
      <Header />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="flex product-page-content">
        <div className="flex product-page-image-div">
          <img
            className="product-page-image"
            src={currentProduct.productImage}
            alt="Product"
          ></img>
        </div>

        <div className="flex column product-page-info">
          <div className="flex column product-page-info-title">
            <h1>{currentProduct.productName}</h1>

            <StarRating rating={currentProduct.productRating} />
          </div>

          <h3 className="product-page-info-price">
            ${currentProduct.productPrice}
          </h3>

          <Button btn_name={"Add to Cart"} onClick={addItemCart} />

          <div className="flex column product-page-buttons-div">
            <button onClick={swapFav} className="flex product-page-button">
              <img
                src={favIcon}
                alt="icon"
                className="product-button-icon"
              ></img>
              <p>Add to Favorites</p>
            </button>

            <button onClick={swapGift} className="flex product-page-button">
              <img
                src={giftIcon}
                alt="icon"
                className="product-button-icon"
              ></img>
              <p>This is a gift</p>
            </button>
          </div>

          <div>
            <h4>Product Details</h4>

            <p>{currentProduct.productDescription}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
