import React, { useState } from "react";
import "./ProductDetailsCard.css";
import RatingBtn from "../Button/RatingBtn";
import { useNavigate, useOutletContext } from "react-router-dom";

const ProductDetailsCard = ({
  id,
  title,
  price,
  image,
  rating,
  reviewlength,
  discountPercentage,
  brand,
  category,
  stock,
  returnPolicy,
  warrantyInformation,
}) => {
  const [userRating, setUserRating] = useState(rating || 0);
  const [hoverRating, setHoverRating] = useState(0);

  const price1 = (parseInt(price) * 50).toFixed(2);
  const originalPrice = price1 / (1 - discountPercentage / 100);
  const { addToCart, addToWishlist,isDarkMode } = useOutletContext();
  const navigate = useNavigate();

  // Handle "Buy Now" button click
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        id,
        title,
        price: price1,
        image,
        rating,
        reviewlength,
        discountPercentage,
        originalPrice: originalPrice.toFixed(2),
      },
    });
  };
  const goBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, rating, reviewlength, discountPercentage });
  };

  const handleAddToWishlist = () => {
    addToWishlist({ id, title, price, image,rating, reviewlength, discountPercentage});
  };


  return (
    <>
      <button onClick={goBack} className="back-btn">
        Back
      </button>
      <div className={`productdetailscardContainer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="left">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="btn">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add To Cart
            </button>
            <button onClick={handleBuyNow} className="custom-buy-btn add-to-cart-btn">
              Buy Now
            </button>
            <button onClick={handleAddToWishlist} className="add-to-cart-btn">
              Add To Wishlist
            </button>
          </div>
        </div>
        <div className="productdetail">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">
            ₹ {price1} <span className="original-price">₹{originalPrice.toFixed(2)}</span> (
            {discountPercentage}% off)
          </p>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= (hoverRating || userRating) ? "filled" : ""}
                onClick={() => setUserRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </span>
            ))}
            <RatingBtn rating={rating} reviewlength={reviewlength} />
          </div>
          <div className="some-detail">
            <h4>
              Brand: <span>{brand}</span>
            </h4>
            <h4>
              Category: <span>{category}</span>
            </h4>
            <h4>
              Stock: <span>{stock}</span>
            </h4>
            <h4>
              Return policy: <span>{returnPolicy}</span>
            </h4>
            <h4>
              Warranty: <span>{warrantyInformation}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
