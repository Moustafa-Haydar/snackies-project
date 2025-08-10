import React, {useState} from 'react';
import './style.css';

const UserAccountInput = ({ value, setValue, label }) => {

    const handleInputChange = (e) => setValue(e.target.value);

    return ( 
    <div className=''>

        <label htmlFor="">{label}</label>

        {

            <div className="UserAccountInput-editing-editing">
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={value}
                    className="UserAccountInput-editing-input"
                />
            </div>
        
        }

    </div>

     );
}
 
export default UserAccountInput;