import React from 'react'
import './style.css'

const CheckoutCardInput = ({label, inputWidth}) => {
    const inputClass = 'checkout-input ' + inputWidth;
    const divClass = 'flex column ' + inputWidth;

  return (
    <div className={divClass}>
        <label className='checkout-label'>{label}</label>
        <input className={inputClass}></input>
    </div>
  )
}

export default CheckoutCardInput