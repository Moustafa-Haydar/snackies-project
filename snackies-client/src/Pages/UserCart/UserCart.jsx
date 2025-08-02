import React from 'react'

import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import CartItem from '../../Components/CartItem/CartItem'

const UserCart = () => {
  return (
    <div>
        <Header />

            <div className='flex user-cart-page'>
                <div className='flex column inner-cart-page'>

                    <h1 className='inner-cart-page-title'>Shopping Cart</h1>
                    <div className='flex inner-cart-info'>
                        <div className='flex column cart-item-cards'>
                            <CartItem itemTitle={"Asian Snack Mix"} itemPrice={"$2.99"} itemQuantity={2}/>
                            <CartItem itemTitle={"Asian Snack Mix"} itemPrice={"$2.99"} itemQuantity={2}/>
                            <CartItem itemTitle={"Asian Snack Mix"} itemPrice={"$2.99"} itemQuantity={2}/>
                            <CartItem itemTitle={"Asian Snack Mix"} itemPrice={"$2.99"} itemQuantity={2}/>
                        </div>

                        <div className='flex column cart-total'>
                            <h3>Total:</h3>

                            <h1>$7.99</h1>

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