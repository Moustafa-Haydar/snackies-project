import React, { useRef } from 'react';
import './style.css';
import filter from '../../Assets/Icons/filter-solid-full.svg'

const ShopFilter = ({name, choices = [], onSelect}) => {

    const filterRef = useRef(null);

    const toggleFromRight = () => {
        if (filterRef.current) {
            filterRef.current.classList.toggle("show");
        }
    };

    return ( 

        <div className="rightFilter"
            onMouseEnter={toggleFromRight}
            onMouseLeave={toggleFromRight}>

            <div className="row center align-center gap-2"
            >
                <button className='filterbtn'>
                    {name}
                    <img className='filter-icon ' src={filter} alt="filter-icon" />
                </button>
            </div>

            <div ref={filterRef} className="rightFilter-content">
                {choices.map((choice) => (
                    <a href="..." 
                    key={choice}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelect(choice);
                    }}
                    >{choice}</a>
                    ))}
            </div>

        </div>
     );
}
 
export default ShopFilter;