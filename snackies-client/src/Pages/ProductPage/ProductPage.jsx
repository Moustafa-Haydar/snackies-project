import React from 'react'
import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'

const ProductPage = () => {

    const addItemCart = () => {
        console.log("adding this item to cart");
    }


  return (
    <div>
        <Header />

        <div className='flex product-page-content'>
            <div className='flex product-page-image-div'>
                <img className='product-page-image' src='image' alt='Product'></img>
            </div>

            <div className='flex column product-page-info'>
                <div>
                    <h1>Asian Snack Mix</h1>

                    {/* <StarRating rating={5} /> */}
                </div>

                <h3>Price</h3>

                <Button btn_name={"Add to Cart"} onClick={addItemCart}/>

                <div>
                    <p>Add to Favotires</p>

                    <p>This is a gift</p>
                </div>

                <div>
                    <h4>Product Details</h4>

                    <p>Product Description</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default ProductPage