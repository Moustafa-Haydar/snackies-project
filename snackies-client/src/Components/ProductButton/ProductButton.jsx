import React from "react";
import './style.css';

const ProductButton = ({ buttonIcon, buttonText, onClick }) => {
  return (
    <button onClick={onClick}>
      <div className="flex">
        <img
          className="product-page-icon"
          src={buttonIcon}
          alt="Product Page Button"
        ></img>
        <p>{buttonText}</p>
      </div>
    </button>
  );
};

export default ProductButton;
