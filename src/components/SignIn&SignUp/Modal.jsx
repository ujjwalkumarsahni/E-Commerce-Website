import React, { useState } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useOutletContext } from "react-router-dom";

export default function Modal({ isPopOpen, setIsPopOpen ,isDarkMode}) {
  const [isSignIn, setIsSignIn] = useState(true);

  const [passwordVisible,setPasswordVisible] = useState(false);

  // const {isDarkMode } = useOutletContext();
  return createPortal(
    <div
      onClick={() => setIsPopOpen(false)}
      className={`modal-overlay ${isPopOpen ? "" : "hidden"}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={`auth-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="auth-toggle">
          <button
            className={`auth-toggle-btn ${isSignIn ? "active" : ""}`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`auth-toggle-btn ${!isSignIn ? "active" : ""}`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>
        <div className="auth-form">
          {isSignIn ? (
            <div className="form-content">
              <input type="text" placeholder="Email" className="auth-input" />
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className="auth-input"
              />
              <div onClick={() => setPasswordVisible(!passwordVisible)} className="passwordVisible">
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </div>
              <button
                onClick={() => setIsPopOpen(false)}
                className="auth-submit"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className="form-content">
              <input type="text" placeholder="Name" className="auth-input" />
              <input type="email" placeholder="Email" className="auth-input" />
              <input
                type='password'
                placeholder="Password"
                className="auth-input"
              />
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="auth-input"
              />
              <div onClick={() => setPasswordVisible(!passwordVisible)} className="passwordVisible">
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </div>
              <button
                onClick={() => setIsPopOpen(false)}
                className="auth-submit"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
