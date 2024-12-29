import React, { useState, useEffect } from "react";
import RatingBtn from "../Button/RatingBtn.jsx";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./CartItem.css";
import Quantity from "../Button/Quantity.jsx";
import DeleteBtn from "../Button/DeletBtn.jsx";

const CartItem = ({
  id,
  title,
  price,
  image,
  rating,
  reviewlength,
  discountPercentage,
  removeFromCart,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(1);

  const price1 = (parseInt(price) * 50).toFixed(2);
  const originalPrice = price1 / (1 - discountPercentage / 100);
  const totalPrice = (price1 * quantity).toFixed(2);

  // Update parent only when the user explicitly changes quantity
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(id, newQuantity); // Call parent function
  };

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
          onClick={() => removeFromCart(id)}
          label="Remove item from cart"
        />
      </div>
      <div className="cart-headeer-container">
        <div className="cart-header">
          <div className="product-detail-header">
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
                  ₹ {price1}{" "}
                  <span className="original-price">
                    ₹{originalPrice.toFixed(2)}
                  </span>{" "}
                  ({discountPercentage}% off)
                </p>
              </div>
            </div>
          </div>
          <div className="other-detail-header">
            <div className="other-header">
              <h4>Quantity</h4>
              <h4>Total Price</h4>
            </div>
            <div className="quantity-total">
              <div className="quantity-selector">
                <Quantity
                  quantity={quantity}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
              <div className="total-price">
                <p className="total-price">₹ {totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containte-footer">
        <div className="buy-btn btn">
          <button onClick={handleBuyNow} className="custom-buy-btn add-to-cart-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

