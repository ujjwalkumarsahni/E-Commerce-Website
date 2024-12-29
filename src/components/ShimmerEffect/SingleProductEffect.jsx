import React from "react";
import './SingleProductEffect.css'
import { useOutletContext } from "react-router-dom";
const SingleProductEffect = () => {
  const {isDarkMode} = useOutletContext();
  return (
    <div className={`effectDetail ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="effect-btn"></button>
      <div className="productdetailscardContainer-effect">
        <div className="left-effect">
          <div className="image-effect"></div>
          <div className="btn-effect">
            <button className="add-btn"></button>
            <button className="add-btn"></button>
            <button className="add-btn"></button>
          </div>
        </div>
        <div className="productdetail-effect">
          <h3 className="product-title-effect"></h3>
          <p className="product-price-effect"></p>
          <div className="star-rating-effect"></div>
          <div className="some-detail-effect">
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
          </div>
        </div>
      </div>
      <div className="______effe">
      <div className="rating-effect"></div>
      <div className={`border-effect ${isDarkMode ? 'dark-mode' : 'light-mode'}`}></div>
      </div>
    </div>
  );
};

export default SingleProductEffect;
