import React from "react";
import "./style.css";
import starRegular from "../../Assets/Icons/star-regular-full.svg";
import starSolid from "../../Assets/Icons/star-solid-full.svg";

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex">
      {Array.from({ length: totalStars }).map((item, index) => (
        <img
          className="star-rating-container"
          key={index}
          src={index < rating ? starSolid : starRegular}
          alt={index <= rating ? "Filled star" : "Empty star"}
        />
      ))}
    </div>
  );
};

export default StarRating;
