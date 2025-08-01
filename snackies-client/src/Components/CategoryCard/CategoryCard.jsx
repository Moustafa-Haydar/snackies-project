import React from "react";
import Button from "../Button/Button";
import './style.css';

const CategoryCard =({imageSrc, categoryName, onClick, type="secondary"})=>{
    return (
        <div className="categorycard-component">
            <div className="image-section">
                <img src={imageSrc} alt={categoryName} />
            </div>
            <div className="button-section">
                <Button btn_name={categoryName} onClick={onClick} type={type}/>
            </div>
        </div>

    );
} 
export default CategoryCard;