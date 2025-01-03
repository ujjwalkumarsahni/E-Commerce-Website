import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../AllCard/Card"; 
import CardEffect from "../ShimmerEffect/CardEffect";
import { useOutletContext } from "react-router-dom";

const MultiCursorProduct = ({ title, category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {isDarkMode} = useOutletContext();
  // Fetch products from API
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // console.log(products);
  
  // Filter products by category
  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter((product) => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  }, [products, category]);




  // Carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 980 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 980, min: 750 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  console.log(filteredProducts)

  return (
    <>
    {
      products==0 ? <CardEffect /> :
    <div className={`home-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="home-card-title">{title}</h2>
      <Carousel
        className="my-custom-carousel"
        // showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="carousel-item-padding-40-px"
        dotListClass="custom-dot-list-style"
      >
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.thumbnail}
              rating={product.rating}
              reviewlength={product.reviews.length}
              discountPercentage={product.discountPercentage}
          />
        ))}
      </Carousel>
    </div>
}
    </>
  );
};

export default MultiCursorProduct;
