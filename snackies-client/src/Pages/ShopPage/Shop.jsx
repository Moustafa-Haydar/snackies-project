import React, { useState, useEffect } from "react";
import "./style.css";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoryController from "../../Controllers/CategoriesController";
import ProductController from "../../Controllers/ProductsController";
import ShopFilter from "../../Components/ShopFilter/ShopFilter";
import filterIcon from '../../Assets/Icons/filter-solid-full.svg';
import xIcon from '../../Assets/Icons/x-solid-full.svg';

const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showFilter, setShowFilter] = useState(false);
    const [priceRange, setPriceRange] = useState(100);

    const toggleContent = () => {
        setShowFilter(!showFilter);
    };

    useEffect(() => {
        CategoryController.getAllCategories(setCategories);
    }, []);

    useEffect(() => {
        ProductController.getAllProducts(setProducts);
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(prevCategory => (prevCategory === category ? null : category));
    };

    const handleCheckboxSelect = (choice) => {
        setSortBy(prevSortBy => (prevSortBy === choice ? null : choice));
    };
    
    const handlePriceChange = (event) => {
        setPriceRange(event.target.value);
    };

    let productsToDisplay = [...products];
    
    if (selectedCategory) {
        productsToDisplay = productsToDisplay.filter(product => product.category.name === selectedCategory);
    }
    
    productsToDisplay = productsToDisplay.filter(product => product.price <= priceRange);

    if (sortBy === "A-Z") {
        productsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Z-A") {
        productsToDisplay.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "Low to High") {
        productsToDisplay.sort((a, b) => a.price - b.price);
    } else if (sortBy === "High to Low") {
        productsToDisplay.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="">
            <Header />
            <div className="categories-container">
                {categories.map(category => (
                    <CategoryCard
                        key={category.id}
                        imageSrc={category.image_url}
                        categoryName={category.name}
                        onClick={() => handleCategorySelect(category.name)}
                    />
                ))}
            </div>

            <div className="filter-content">
                <button className='filterbtn' onClick={toggleContent}>
                    <img
                        className='filter-icon'
                        src={showFilter ? xIcon : filterIcon}
                        alt={showFilter ? "exit-icon" : "filter-icon"}
                    />
                </button>
                
                {showFilter && (
                    <div className={`right-side-filter ${showFilter ? 'show' : ''}`}>
                        <div className="filter-options-container">
                            <h2 className="filter-title">Sort By:</h2>
                            <ShopFilter 
                                name={"Alphabetically:"}
                                choices={["A-Z", "Z-A"]}
                                type="checkbox"
                                selectedChoice={sortBy}
                                onSelect={handleCheckboxSelect}
                            />
                            <ShopFilter 
                                name={"Price:"}
                                choices={["Low to High", "High to Low"]}
                                type="checkbox"
                                selectedChoice={sortBy}
                                onSelect={handleCheckboxSelect}
                            />
                            <h2 className="filter-title">Filter By:</h2>
                            <div className="price-slider-container">
                                <span className="sub-label">Price:</span>
                                <input
                                    type="range"
                                    className="price-slider"
                                    min="0"
                                    max="100"
                                    value={priceRange}
                                    onChange={handlePriceChange}
                                />
                                <div className="price-label">
                                    <span className="min-price">$0</span>
                                    <span className="max-price">${priceRange}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="products-container">
                    {productsToDisplay.map(product => (
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            productImage={product.image}
                            productDescription={product.description}
                            productRating={product.average_rating}
                            productName={product.name}
                            productPrice={product.price}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;