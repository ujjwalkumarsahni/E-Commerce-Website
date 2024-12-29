import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./Card.css";

const Card = ({ id, title, price, image, rating, reviewlength, discountPercentage }) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlistItems ,isDarkMode} = useOutletContext();
  const [wishlistIcon, setWishlistIcon] = useState(
    !!wishlistItems.find((item) => item.id === id)
  );

  const handleWishlistClick = () => {
    const item = { id, title, price, image, rating, reviewlength, discountPercentage };
    if (wishlistIcon) {
      removeFromWishlist(id);
    } else {
      addToWishlist(item);
    }
    setWishlistIcon(!wishlistIcon);
  };
 

  return (
    <div className={`card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div
        className={`wishlist-icon ${wishlistIcon ? "icon-red" : ""}`}
        onClick={handleWishlistClick}
      >
        <FaHeart />
      </div>
      <Link to={`/product/${id}`} className="card-image">
        <img src={image} alt={`${title}`} />
      </Link>
      <div className="card-details">
        <h3 className="card-brand">{title}</h3>
        <p className="card-price">₹{parseInt(price) * 50}</p>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`star ${star <= rating ? "filled" : ""}`}>
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="card-actions">
        <Link to={`/product/${id}`} className="details-btn">
          Details
        </Link>
        <button
          onClick={() =>
            addToCart({ id, title, price, image, rating, reviewlength, discountPercentage })
          }
          className="add-to-cart-btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
