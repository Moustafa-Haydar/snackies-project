import React from 'react';
import './style.css';
import StarRating from '../StarReview/StarReview';

const ReviewCard = ({ reviewText, reviewerName, productName, rating }) => {

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="star-rating-container">
          <StarRating rating={rating}/>
        </div>
      </div>
      <div className="review-content">
        <p className="review-text">{reviewText}</p>
        <p className="reviewer-name">{reviewerName}</p>
        <p className="product-name">{productName}</p>
      </div>
      <div className="review-image-placeholder">
        <img src="product-image" alt="product-image" className='review-product-image' />
      </div>
    </div>
  );
};

export default ReviewCard;