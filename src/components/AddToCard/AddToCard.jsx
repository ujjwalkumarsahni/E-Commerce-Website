import React, { useState, useCallback } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import "./AddToCard.css";
import emptyCard from "../../assets/Card/eeeeeee.webp";
import CartItem from "./CartItem.jsx";

const AddToCard = () => {
  const { cartItems, removeFromCart } = useOutletContext();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = useCallback((id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  }, []);

  const calculateTotalCartPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const itemPrice = parseInt(item.price) * 50;
        const quantity = quantities[item.id] || 1;
        return total + itemPrice * quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="addToCardHeader">
        {cartItems.length === 0 ? (
          <img className="empty-img" src={emptyCard} alt="Empty Cart" />
        ) : (
          <ul className="ul-container">
            <h1 className="Cart-header">Shopping Cart</h1>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                reviewlength={item.reviewlength}
                discountPercentage={item.discountPercentage}
                removeFromCart={removeFromCart}
                onQuantityChange={handleQuantityChange}
              />
            ))}
            <div className="cart-summary">
              <h2>Total Price: ₹ {calculateTotalCartPrice()}</h2>
            </div>
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AddToCard;
