import React, { useEffect, useState } from 'react';
import './BannerSlider.css';
import BannerSliderEffect from "../ShimmerEffect/BannerSliderEffect";
import image1 from '../../assets/Images/banner-1.jpg';
import image2 from '../../assets/Images/banner-2.jpg';
import image3 from '../../assets/Images/banner-3.jpg';
import image5 from '../../assets/Images/banner-5.jpg';
import image6 from '../../assets/Images/banner-6.jpg';
import image7 from '../../assets/Images/banner-7.jpg';
import image8 from '../../assets/Images/banner-8.jpg';
const ImageSlider = () => {
  const images = [
    image1,
    image2,
    image3,
    image1,
    image5,
    image6,
    image7,
    image8,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    console.log(interval);
    
    return () => clearInterval(interval); 
  }, [images.length]);
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slide-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="slide-image" />
          ))}
        </div>
        <button className="slider-button slider-button-prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="slider-button slider-button-next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
