import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-middle">
        <div id="footer-container">
          <div id="get-know-more" className="footer-section">
            <b>Get To Know Us</b>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>
          <div id="contact-us" className="footer-section">
            <b>Contact With Us</b>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div id="make-money" className="footer-section">
            <b>Make Money With Us</b>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </div>
          <div id="help-you" className="footer-section">
            <b>Let Us Help You</b>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
          </div>
        </div>
        <div id="footer-logo">
          <div id="f-logo">
            {/* <img src={logo} alt="amazon-logo" /> */}
            <h2>Online Shoping</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
