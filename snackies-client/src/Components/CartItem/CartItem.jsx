import React from 'react'
import './style.css'

const CartItem = ({ itemImage, itemTitle, itemQuantity, removeItem, itemPrice }) => {
  return (
    <div className='flex cart-item-card'>
        <img className='cart-item-image' src={itemImage} alt='cart item'></img>

        <div className='flex cart-item-info'>
            <h4>{itemTitle}</h4>

            <h4>{itemQuantity}</h4>

            <h4>${itemPrice}</h4>
            
            <button className='remove-cart-item'>Remove</button>
        </div>
    </div>
  )
}

export default CartItem