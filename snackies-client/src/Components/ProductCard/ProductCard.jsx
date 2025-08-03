import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import StarRating from '../StarReview/StarReview';

const ProductCard = ({productId, productName, productPrice, productRating, productImage}) => {
    const navigate = useNavigate();

    const handleCardClick =()=>{
        navigate(`/product/${productId}`);
    };

    return (
        <div className="product-card" onClick={handleCardClick}>
            <div className="product-image">
                <img src={productImage} alt={productImage} />
            </div>    
            <div className="product-details">
                <StarRating rating={productRating} />
                <h3 className="product-name">{productName}</h3>
                <p className="product-price">${productPrice}</p>
            </div>
        </div>
    );
}
export default ProductCard;
