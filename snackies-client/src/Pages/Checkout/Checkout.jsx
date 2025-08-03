import React from 'react'
import './style.css'
import Button from '../../Components/Button/Button'

const Checkout = () => {
  return (
    <main className='flex checkout-page'>
        <div className='flex column checkout-page-inner'>
            <h1>Checkout</h1>

            <h3>Payment Method</h3>

            <div className='flex column checkout-payment-card'>
                <div className='flex payment-card-header'>

                </div>

                <section className='flex column payment-card-details'>
                    <input></input>

                    <div className='flex'>
                        <input></input>
                        <input></input>
                    </div>

                    <input></input>
                </section>

                <section className='flex column checkout-summary'>
                    <h2>Order Summary</h2>

                    <p>Original Price:</p>

                    <h3>Total:</h3>

                    <Button btn_name={"Pay"} />
                </section>
            </div>
        </div>
    </main>
  )
}

export default Checkout