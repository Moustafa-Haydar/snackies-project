import React from 'react';
import './style.css';

const ShopFilter = ({ name, type = 'checkbox', choices = [], selectedChoice, onSelect }) => {
    return (
        <div className="rightFilter-group">
            <span className="filter-label">{name}</span>
            <div className="rightFilter-content">
                {choices.map((choice) => (
                    <div key={choice} className="checkbox-option">
                        <input
                            type={type}
                            id={`${name}-${choice}`}
                            name={name}
                            value={choice}
                            checked={selectedChoice === choice}
                            onChange={() => onSelect(choice)}
                        />
                        <label htmlFor={`${name}-${choice}`}>
                            {choice}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopFilter;