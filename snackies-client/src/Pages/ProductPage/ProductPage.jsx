import React from 'react'
import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'

const ProductPage = () => {
  return (
    <div>
        <Header />

        <div className='flex product-page-content'>
            <div className='flex product-page-image'>
                product image
            </div>

            <div className='flex column product-page-info'>
                <h1>Asian Snack Mix</h1>

                <p>Rating</p>

                <h3>Price</h3>

                <Button btn_name={"Add to Cart"} />

                <p>Add to Favotires</p>

                <p>This is a gift</p>

                <h4>Product Details</h4>

                <p>Product Description</p>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default ProductPage