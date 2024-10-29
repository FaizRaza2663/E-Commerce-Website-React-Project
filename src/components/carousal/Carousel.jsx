import React, { useEffect, useRef } from "react";
import "./Carousel.css"; // Custom CSS file import

const Carousel = () => {
  const carouselRef = useRef(null);
  const currentIndex = useRef(0);

  const images = [
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-5.jpg&w=1920&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-4.jpg&w=1920&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-6.jpg&w=1920&q=100"
  ];

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const goToNext = () => {
    const isLastSlide = currentIndex.current === images.length - 1;
    currentIndex.current = isLastSlide ? 0 : currentIndex.current + 1;
    updateCarousel();
  };

  const updateCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex.current * 100}%)`;
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-inner" ref={carouselRef}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
