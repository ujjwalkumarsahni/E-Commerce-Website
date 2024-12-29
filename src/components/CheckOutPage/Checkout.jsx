import React, { useState } from "react";
import {
  FaCreditCard,
  FaEdit,
  FaTrash,
  FaUniversity,
  FaWallet,
} from "react-icons/fa";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import AddressForm from "./AddressForm";
import "./Checkout.css";
import OrderSummary from "./OrderSummary";
import SuccessPopup from "./SuccessPopup";
import Footer from "../Footer/Footer.jsx";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    id,
    title,
    price,
    image,
    rating,
    reviewlength,
    discountPercentage,
    originalPrice,
  } = location.state || {};

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const totalPrice = (price * quantity).toFixed(2);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Ujjwal Kumar",
      phone: "9608483662",
      addressLine: "Jodhpur, india",
      city: "Jodhpur",
      postalCode: "342802",
    },
  ]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formAddress, setFormAddress] = useState({
    name: "",
    phone: "",
    addressLine: "",
    city: "",
    postalCode: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormAddress({ ...formAddress, [name]: value });
  };

  const handleSaveAddress = () => {
    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingAddress.id ? { ...formAddress, id: addr.id } : addr
        )
      );
    } else {
      setAddresses((prev) => [...prev, { ...formAddress, id: Date.now() }]);
    }
    setFormAddress({
      name: "",
      phone: "",
      addressLine: "",
      city: "",
      postalCode: "",
    });
    setEditingAddress(null);
    setIsFormVisible(false);
  };

  const handleDeleteAddress = (addressId) => {
    setAddresses((prev) => prev.filter((address) => address.id !== addressId));
  };

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [upiDetails, setUpiDetails] = useState({ phonePe: false, upiId: "" });
  const handleUpiDetailsChange = (e) => {
    setUpiDetails((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    if (e.target.value !== "upi") {
      setUpiDetails({ phonePe: false, upiId: "" });
    }
  };

  const handleContinue = () => {
    if (paymentMethod === "cash") {
      setIsPopupVisible(true);
    } else if (paymentMethod === "upi") {
      setIsPopupVisible(true);
    } else if (paymentMethod === "credit-card") {
      setIsPopupVisible(true);
    } else if (paymentMethod === "debit-card") {
      setIsPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    navigate("/");
  };
  const {isDarkMode } = useOutletContext();

  return (
    <>
      <div className="checkout-container">
        {/* Delivery Address Section */}
        <div className="delivery-address">
          <div className="address-header">
            <h2>Delivery Address : </h2>
            {!isFormVisible && (
              <p
                className="add-new-address-btn"
                onClick={() => {
                  setEditingAddress(null);
                  setFormAddress({
                    name: "",
                    phone: "",
                    addressLine: "",
                    city: "",
                    postalCode: "",
                  });
                  setIsFormVisible(true);
                }}
              >
                Add New Address
              </p>
            )}
          </div>
          <hr />
          {addresses.map((address) => (
            <div key={address.id} className={`address-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
              <div>
                <p>
                  <strong> {address.name}</strong>, {address.addressLine},
                  {address.city}, {address.postalCode}
                </p>
                <p>
                  {address.phone}
                  <span
                    className="icon-btn"
                    onClick={() => {
                      setEditingAddress(address);
                      setFormAddress(address);
                      setIsFormVisible(true);
                    }}
                  >
                    <FaEdit title="Edit Address" />
                  </span>
                </p>
              </div>
              <div className="address-actions">
                <p
                  className="icon-btn delete-icon"
                  onClick={() => handleDeleteAddress(address.id)}
                >
                  <FaTrash title="Delete Address" />
                </p>
              </div>
            </div>
          ))}
          <AddressForm
            isFormVisible={isFormVisible}
            handleInputChange={handleInputChange}
            handleSaveAddress={handleSaveAddress}
            formAddress={formAddress}
            editingAddress={editingAddress}
          />
        </div>
        {/* Order Summary Section */}
        <OrderSummary
          title={title}
          price={price}
          image={image}
          rating={rating}
          reviewlength={reviewlength}
          discountPercentage={discountPercentage}
          originalPrice={originalPrice}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          totalPrice={totalPrice}
        />

        <h2 className="Payment">Payment</h2>
        <div className={`payment-container-div ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <div className="method">
            <input
              type="radio"
              id="upi"
              name="payment-method"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={handlePaymentMethodChange}
            />
            <FaUniversity size={30} color="#4caf50" />
            <label htmlFor="upi">UPI</label>
            {paymentMethod === "upi" && (
              <div className="upi-options">
                <label>
                  <input
                    type="checkbox"
                    name="phonePe"
                    checked={upiDetails.phonePe}
                    onChange={handleUpiDetailsChange}
                  />
                  PhonePe
                </label>
                <div className="upiid">
                  <label htmlFor="upi-id">Enter UPI ID:</label>
                  <input
                    type="text"
                    id="upi-id"
                    name="upiId"
                    value={upiDetails.upiId}
                    onChange={handleUpiDetailsChange}
                    placeholder="example@upi"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="method">
            <input
              type="radio"
              id="cash"
              name="payment-method"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={handlePaymentMethodChange}
            />
            <FaWallet size={30} color="#ff9800" />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>
          <div className="method">
            <input
              type="radio"
              id="credit-card"
              name="payment-method"
              value="credit-card"
              checked={paymentMethod === "credit-card"}
              onChange={handlePaymentMethodChange}
            />
            <FaCreditCard size={30} color="#2196f3" />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
          <div className="method">
            <input
              type="radio"
              id="debit-card"
              name="payment-method"
              value="debit-card"
              checked={paymentMethod === "debit-card"}
              onChange={handlePaymentMethodChange}
            />
            <FaCreditCard size={30} color="#8bc34a" />
            <label htmlFor="debit-card">Debit Card</label>
          </div>

          {/* Payment Details Section */}
          {paymentMethod !== "cash" && (
            <div className="payment-details">
              {paymentMethod === "credit-card" ||
              paymentMethod === "debit-card" ? (
                <div>
                  <p className="card-dd">Enter your card details below:</p>
                  <form className="detail-form-card">
                    <input type="number" placeholder="Card Number" />
                    <input type="number" placeholder="Expiry Date" />
                    <input type="number" placeholder="CVV" />
                  </form>
                </div>
              ) : null}
            </div>
          )}

          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>

          {/* Success Popup */}
          <SuccessPopup
            isPopupVisible={isPopupVisible}
            handleClosePopup={handleClosePopup}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
