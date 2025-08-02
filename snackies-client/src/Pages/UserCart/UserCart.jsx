import React, { useEffect, useState } from 'react'

import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import CartItem from '../../Components/CartItem/CartItem'

const UserCart = () => {
    const [total, setTotal] = useState(0);

    const cartItems = [
        {name : "Asian Snack Mix", price : 2.99, quantity : 3},
        {name : "Asian Snack Mix", price : 2.99, quantity : 3},
        {name : "Asian Snack Mix", price : 2.99, quantity : 3},
        {name : "Asian Snack Mix", price : 4.99, quantity : 3},
    ]

    const calculateTotal = () => {
        let tempTotal = 0;

        cartItems.forEach(item => {
            tempTotal += (item.price * item.quantity);
        });

        setTotal(tempTotal);
    }

    useEffect(() => {
        calculateTotal();
    })

  return (
    <div>
        <Header />

            <div className='flex user-cart-page'>
                <div className='flex column inner-cart-page'>

                    <h1 className='inner-cart-page-title'>Shopping Cart</h1>
                    <div className='flex inner-cart-info'>
                        <div className='flex column cart-item-cards'>
                            {cartItems.map((item) => {
                                return <CartItem itemTitle={item.name} itemPrice={item.price} itemQuantity={item.quantity}/>
                            })}
                        </div>

                        <div className='flex column cart-total'>
                            <h3>Total:</h3>

                            <h1>${total}</h1>

                            <Button btn_name={"Proceed to Checkout →"} />
                        </div>
                    </div>
                </div>
            </div>

        <Footer />
    </div>
  )
}

export default UserCart