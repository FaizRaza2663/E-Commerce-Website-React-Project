import React, { useEffect, useState } from 'react';
import './FlashSale.css';
import axios from 'axios';
import FlashSaleCard from '../common/card/flashSaleCard/FlashSaleCard';

const FlashSale = () => {
  const [featureProduct, setFeatureProduct] = useState([]);

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 5; // To show 5 cards at a time

  // Fetching data from API
  const getFeatureData = async () => {
    try {
      const products = await axios.get('https://fakestoreapi.in/api/products');
      const res = products.data.products;
      setFeatureProduct(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeatureData();
  }, []);

  // Go to the next slide
  const nextSlide = () => {
    if (currentIndex + cardsPerView < featureProduct.length) {
      setCurrentIndex(currentIndex + cardsPerView);
    } else {
      setCurrentIndex(0); // Go back to the start
    }
  };

  // Go to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerView);
    } else {
      setCurrentIndex(featureProduct.length - cardsPerView); // Go to the end
    }
  };

  // Slicing the featureProduct array to only show 5 items at a time
  const visibleProducts = featureProduct.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <>
      <h1 className='flash-sale'>Flash Sale</h1>
      <div className="slider-container">
        <div className="slider">
          <div className="slider-content">
            {visibleProducts.map((item, index) => (
              <div key={index} className="slide">
                <FlashSaleCard data={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows for navigation */}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </>
  );
};

export default FlashSale;
