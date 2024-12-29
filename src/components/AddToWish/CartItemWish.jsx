import React from "react";
import RatingBtn from "../Button/RatingBtn.jsx";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import DeleteBtn from "../../components/Button/DeletBtn.jsx";
import './CartItemWish.css'

const CartItemWish = ({
  id,
  title,
  price,
  image,
  rating,
  reviewlength,
  discountPercentage,
  removeFromWishlist,
}) => {
  const price1 = (parseInt(price) * 50).toFixed(2);
  const originalPrice = price1 / (1 - discountPercentage / 100);

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
  const {isDarkMode } = useOutletContext();
  return (
    <div className={`cart-containar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="delete-btn">
        <DeleteBtn
          onClick={() => removeFromWishlist(id)}
          label="Remove item from wishlist"
        />
      </div>
      <div className="cart-headeer-container">
        <div className="cart-header">
          <div className="product-detail-header-1">
            <h4>Product Details</h4>
            <div className="product-detail-containar">
              <div className="product-image">
                <Link to={`/product/${id}`} className="card-image-1">
                  <img
                    className="wishlist-image"
                    src={image}
                    alt={`${title}`}
                  />
                </Link>
              </div>
              <div className="product-detail">
                <h3 className="product-title">{title}</h3>
                <div className="product-rating">
                  <RatingBtn rating={rating} reviewlength={reviewlength} />
                </div>
                <p className="product-price">
                  ₹ {price1} {" "}
                  <span className="original-price">
                    ₹{originalPrice.toFixed(2)}
                  </span>{" "}
                  ({discountPercentage}% off)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containte-footer">
        <div className="buy-btn btn">
          <button
            className="custom-buy-btn add-to-cart-btn"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemWish;

