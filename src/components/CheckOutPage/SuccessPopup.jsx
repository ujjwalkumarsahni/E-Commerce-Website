import React from 'react'
import { useOutletContext } from 'react-router-dom';

const SuccessPopup = ({isPopupVisible,handleClosePopup}) => {
  const {isDarkMode } = useOutletContext();
  return (
    <>
         {isPopupVisible && (
          <div className={`popup ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`popup-content ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
              <h2>Order Placed Successfully!</h2>
              <p>Your order has been placed and will be delivered soon.</p>
              <button className='close-popup-btn' onClick={handleClosePopup}>OK</button>
            </div>
          </div>
        )}
    </>
  )
}

export default SuccessPopup