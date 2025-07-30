import React from 'react';
import './style.css';

const Input = ({label, type, placeholder, value, onChange, name }) => {

    const inputId = `input-${name}`;

    return ( 

        <div className='display-column'>

            <label htmlFor={inputId}>
                {label}
            </label>

            <input 
                id={inputId}
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />

        </div>
     );
}
 
export default Input;