import React, {useState} from 'react';
import './style.css';

const UserAccountInput = ({ value, setValue, label }) => {

    const [isEditing, setIsEditing] = useState(false);
    const handleChangeClick = () => setIsEditing(true);
    const handleInputChange = (e) => setValue(e.target.value);
    const handleSave = () => { setIsEditing(false) };

    return ( 
    <div className=''>

        <label htmlFor="">{label}</label>

        {isEditing ? (

            <div className="UserAccountInput-editing-editing">
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={value}
                    className="UserAccountInput-editing-input"
                />
                <button onClick={handleSave} className="UserAccountInput-editing-save-btn">save</button>
            </div>

        ) : (
            
            <div className="UserAccountInput-editing-no-editing">
                <span>{value}</span>
                <button onClick={handleChangeClick} className="UserAccountInput-change-btn">change</button>
            </div>

        )}

    </div>

     );
}
 
export default UserAccountInput;