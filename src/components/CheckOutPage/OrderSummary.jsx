import React from "react";
import RatingBtn from "../Button/RatingBtn";
import Quantity from "../Button/Quantity";
import { Link, useOutletContext } from "react-router-dom";

const OrderSummary = ({title,price,image,rating,reviewlength,discountPercentage,originalPrice,quantity,handleQuantityChange,totalPrice}) => {
  const {isDarkMode } = useOutletContext();
  return (
    <>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className={`cart-containar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <div className="cart-headeer-container">
            <div className="cart-header">
              <div className="product-detail-header">
                <h4>Product Details</h4>
                <div className="product-detail-containar">
                  <div className="product-image">
                    <Link to={`/`} className="card-image-1">
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
                      ₹ {price}{" "}
                      <span className="original-price">₹{originalPrice}</span> (
                      {discountPercentage}% off)
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
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
