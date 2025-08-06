import React, { useEffect, useRef, useState } from "react";
import HeroItems from "../../Assets/images/LandingPage/hero_section_foreground.webp";
import Button from "../../Components/Button/Button";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import starIcon from "../../Assets/Icons/star-solid-full.svg";
import leftArrow from "../../Assets/Icons/empty-arrow-left-svgrepo-com.svg";
import rightArrow from "../../Assets/Icons/empty-arrow-right-svgrepo-com.svg";
import Header from '../../Components/Header/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
// import ImageUpload from "../../Components/ImageUpload/ImageUpload";
import Footer from "../../Components/Footer/Footer";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import CategoriesController from "../../Controllers/CategoriesController";
import ChatBtn from "../../Components/ChatBtn/ChatBtn";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import ReviewsController from "../../Controllers/ReviewsController";

// required code to use token provider

// import { TokenContext } from '../../Contexts/TokenContext';
//   // test token
//   const { tokenState } = useContext(TokenContext);
  
//   useEffect(() => {
//     console.log(tokenState);
//   });


const LandingPage = () => {
  const sliderRef = useRef();
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect (() => {
    CategoriesController.getAllCategories(setCategories);
  }, [])

  useEffect (() => {
    ReviewsController.getAllReviews(setReviews);
  }, [])

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const scrollLeft = () => {
    console.log("Scroll Left");
    sliderRef.current.slickPrev();
  };

  const scrollRight = () => {
    console.log("Scroll Right");
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <ChatBtn/>
      <Header/>

      <div className="flex hero-section">
        <img className="hero-items" src={HeroItems} alt="Assorted Items"></img>

        <div className="flex column hero-section-subdiv">
          <p className="hero-section-text">
            Welcome to Snackies! A Lebanese website all about revolutionizing
            the snacking experience. Whether you enjoy the fragrance of cheese,
            the sweetness of chocolate or the crunch of nuts, we've got you
            covered!
          </p>
          <Button btn_name={"View Our Products"} />
        </div>
      </div>

      <div className="landing-category-section test">
        <h1 className="landing-category-title">
          What Are You Hankering For Today?
        </h1>

        <div className="flex landing-category-cards-div">
          {categories.map((cat) => {
            return <CategoryCard key={cat.id} imageSrc={cat.image_url} categoryName={cat.name}/>
           })}
        </div>
      </div>

      <div className="product-of-the-day flex">
        <div className="flex column product-of-the-day-info">
          <h1 className="product-of-the-day-title">Product of the Day</h1>

          <p className="product-of-the-day-description">
            This will be a randomly selected product of the day. This box will
            highlight the description of the product.
          </p>

          <Button btn_name={"View Product"} />
        </div>

        <div className="product-of-the-day-image">Background Image</div>
      </div>

      <div className="flex column best-sellers">
        <div className="best-sellers-scrolling-wrapper">
          <Marquee autoFill={true}>
            <div className="flex best-sellers-scroll-banner-element">
              <h1 className="best-sellers-title">Reviews</h1>

              <img
                className="best-sellers-star-icon"
                src={starIcon}
                alt="star-icon"
              ></img>
            </div>
          </Marquee>
        </div>

        <div className="flex best-sellers-cards">
          <div className="flex column flex-center best-sellers-card">
            <div className="best-sellers-image">Card Image</div>
            <h3>Product Title</h3>
          </div>
        </div>
      </div>

      <div className="flex column landing-reviews">
        <h1 className="landing-reviews-title">Reviews</h1>

        <div className="slider-container">
          <Slider ref={sliderRef} {...carouselSettings}>
            {reviews.map((rev) => {
            return <ReviewCard key={rev.id} 
            reviewText={rev.text} reviewerName={rev.user.first_name} productName={rev.item.name} rating ={rev.rating}/>
           })}
          </Slider>
        </div>

        <div className="flex landing-review-arrows-div">
          <button className="landing-review-buttons" onClick={scrollLeft}>
            <img
              className="landing-review-arrow"
              src={leftArrow}
              alt="left arrow"
            ></img>
          </button>

          <button className="landing-review-buttons" onClick={scrollRight}>
            <img
              className="landing-review-arrow"
              src={rightArrow}
              alt="right arrow"
            ></img>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;