import React from "react";
import Button from "../Button/Button";
import './style.css';
import image from '../../Assets/CategoryCards/Cheesy.png'

const CategoryCard =({imageSrc, categoryName, onClick})=>{
    return (
        <div className="categorycard-component">
            <div className="image-section">
                <img src={imageSrc} alt={categoryName} />
            </div>
            <div className="button-section">
                <Button btn_name={categoryName} onClick={onClick}/>
            </div>
        </div>

    );
} 
export default CategoryCard;