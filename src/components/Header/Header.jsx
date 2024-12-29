import React, { useState } from "react";
import { FaStore, FaHeart, FaShoppingCart, FaUser, FaBars, FaSearch, FaSun, FaMoon } from "react-icons/fa";
import "./Header.css";
import logo from '../../assets/Logo/LOGO.webp';
import { Link, useNavigate } from "react-router-dom";
import Modal from '../SignIn&SignUp/Modal.jsx'
const Header = ({cartCount,wishlistCount,isDarkMode,setIsDarkMode}) => {

  // Humburgur menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopOpen,setIsPopOpen] = useState(false);
  // Search to product
  const [searchQuery, setSearchQuery] = useState("");

  // redirect of url of search product
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();    // Prevent the default form submission
    if (searchQuery.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('')
    }
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <form onSubmit={handleSearch} className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className={`search-input ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch onClick={handleSearch} className="search-icon"/> 
        </form>
      </div>
      {/* Navigation Items */}
      <nav className={`nav ${isDarkMode ? 'dark-mode' : 'light-mode'} ${isMenuOpen ? "open" : ""}`}>
        <Link to="/marketplace" className="nav-item">
          <FaStore className="nav-icon" />
          <span>Marketplace</span>
        </Link>
        <Link to="/wishlist" className="nav-item">
          <FaHeart className="nav-icon" />
          <span>Wishlist</span>
          <div className="nav-item-card">
          <p className="nav-item-card-value">{wishlistCount}</p>
          </div>
        </Link>
        <Link to="/card" className="nav-item">
          <FaShoppingCart className="nav-icon" />
          <span>Cart</span>
          <div className="nav-item-card">
          <p className="nav-item-card-value">{cartCount}</p>
          </div>
        </Link>
          <p className="nav-item nav-account" onClick={() => setIsPopOpen(true)}><FaUser className="nav-icon" /> Account</p>
          <Modal isPopOpen={isPopOpen} setIsPopOpen={setIsPopOpen} isDarkMode={isDarkMode}/>
      </nav>
      <p onClick={toggleTheme} className="toggle-button">
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        <b>{isDarkMode ? ' Light Mode' : ' Dark Mode'}</b>
      </p>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FaBars className="hamburger-icon" />
      </div>
    </header>
  );
};

export default Header;

