import React from 'react'
import './style.css'

const CheckoutCardInput = ({label, inputWidth, setField}) => {
    const inputClass = 'checkout-input ' + inputWidth;
    const divClass = 'flex column ' + inputWidth;

  return (
    <div className={divClass}>
        <label className='checkout-label'>{label}</label>
        <input className={inputClass} onChange={e => setField(e.target.value)}></input>
    </div>
  )
}

export default CheckoutCardInput