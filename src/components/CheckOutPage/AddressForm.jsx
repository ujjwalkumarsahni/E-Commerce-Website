import React from "react";
import "./Checkout.css"; // Ensure styles are linked
import { useOutletContext } from "react-router-dom";

const AddressForm = ({
  isFormVisible,
  handleInputChange,
  handleSaveAddress,
  formAddress,
  editingAddress,
}) => {
  const {isDarkMode } = useOutletContext();
  return (
    <>
      {isFormVisible && (
        <div className="overlay">
          <div className={`address-form-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h3>{editingAddress ? "Edit Address" : "Add New Address"}</h3>
            <form className="address-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formAddress.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formAddress.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="addressLine"
                placeholder="Address Line"
                value={formAddress.addressLine}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formAddress.city}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formAddress.postalCode}
                onChange={handleInputChange}
                required
              />
              <button type="button" onClick={handleSaveAddress}>
                Save Address
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddressForm;
