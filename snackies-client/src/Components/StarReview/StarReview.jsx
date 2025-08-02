import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StarRating = ({ rating, totalStars = 5 }) => { 
  return (
    <div className="star-rating-container">
      {...Array.from({ length: totalStars }).map((item, index) => (
        <FontAwesomeIcon
          key={index} 
          icon={index + 1 <= Math.floor(rating) ? "fa-solid fa-star" : "fa-regular fa-star"}
          className="star-icon"
        />
      ))}
    </div>
  );
};

export default StarRating;
