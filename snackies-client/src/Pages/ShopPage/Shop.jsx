import React from "react";
import "./style.css";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import CategoryController from "../../Controllers/CategoriesController";
import ProductController from "../../Controllers/ProductsController";
// import RightSideFilter from "../../Components/Filter/RightSIdeFilter";
import './style.css';

const Shop = () => {
    const [categories, setCategories]= useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProductsByCategory, setFilteredProductsByCategory]= useState([]);
    const [filteredProductsByPrice, setFilteredProductsByPrice]= useState([]);
    const [sortProductsByName, setSortProductsByName]= useState([]);
    const [sortProductsByPrice, setSortProductsByPrice]= useState([]);
    const navigate= useNavigate();

    // useEffect (() => {
    //   CategoryController.getAllCategories(setCategories);
    // },[]);

    useEffect (() => {
      ProductController.getAllProducts(setProducts);
    },[]);

    // const FilterProductsByCategory = (category) => {
    //     const filteredProducts = products.filter(product =>
    //         category ? product.category === category : true
    // );
    // setFilteredProductsByCategory(filteredProducts);
    // };

    const FilterProductsByPrice = (price) => {
        const filterProducts = products?.filter(product =>
            price ? product.price <= price : true
    );
    setFilteredProductsByPrice(filterProducts);
    };

    const SortProductsByName = () => {
        const sortProducts= products.sort((a, b) => a.name.localeCompare(b.name)
    );
    setSortProductsByName(sortProducts);
    };

    const SortProductsByPrice = () => {
        const sortProducts= products.sort((a, b) => a.price - b.price);
    setSortProductsByPrice(sortProducts);
    };

    return (
        <div className="">
            <Header />
            {/* <div className="categories-container">
                {categories.map(category =>(
                <CategoryCard
                key={category.id}
                imageSrc={category.image}
                categoryName={category.name}
                onClick={() => FilterProductsByCategory(category.name)}/>
                ))}
            </div> */}
            {/* <div className="right-side-filter">
                <RightSideFilter 
                name={"Sort Alphabetically"}
                choices={["A-Z","Z-A"]}
                onSelect={SortProductsByName}
                />
                <RightSideFilter 
                name={"Sort By Price"}
                choices={["Low to High","High to Low"]}
                onSelect={SortProductsByPrice}
                />
                <RightSideFilter 
                name={"Filter By Price"}
                choices={["A-Z","Z-A"]}
                onSelect={FilterProductsByPrice}
                />
            </div> */}
            <div ProductCard="products-container">
                {products.map(product => (
                <ProductCard
                key={product.id}
                productId={product.id}
                productImage={product.image}
                productRating={product.rating}
                productName={product.name}
                productPrice={product.price}
                />
                ))}
            </div>
            <Footer/>
        </div>
    );

}
export default Shop;



