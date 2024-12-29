import React, { useState } from "react";
import "./Button.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Quantity = ({ quantity = 1, onQuantityChange }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const handleIncrement = () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(1, localQuantity - 1); // Prevent negative or zero quantity
    setLocalQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="quantity">
      <button className="quantityBtn" onClick={handleDecrement}>
        <AiOutlineMinus />
      </button>
      <p className="quantityValue">{localQuantity}</p>
      <button className="quantityBtn" onClick={handleIncrement}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Quantity;
