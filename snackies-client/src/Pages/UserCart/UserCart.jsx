import React from 'react'

import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'

const UserCart = () => {
  return (
    <div>
        <Header />

            <div className='flex user-cart-page'>
                <div className='flex column inner-cart-page'>
                    <h1>Shopping Cart</h1>

                    <div className='flex inner-cart-info'>
                        <div className='flex column cart-item-cards'>
                            Cart Item
                        </div>

                        <div className='flex column cart-total'>
                            <h4>Total:</h4>

                            <h3>$7.99</h3>

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