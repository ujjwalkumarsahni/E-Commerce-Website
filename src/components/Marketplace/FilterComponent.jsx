import React, { useState } from "react";
import "./FilterComponent.css";

const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

const FilterComponent = ({ onFilterChange }) => {

  const [filters, setFilters] = useState({
    category: "",
    price: "",
    brand: "",
    gender: "",
    discount: "",
    customerRatings: "",
    availability: "",
  });

  const handleChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

 
  const clearAllFilters = () => {
    const clearedFilters = {
      category: "",
      price: "",
      brand: "",
      gender: "",
      discount: "",
      customerRatings: "",
      availability: "",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters); 
  };

  return (
    <div className="filter-component">
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="clear-all" onClick={clearAllFilters}>
          Clear All
        </button>
      </div>

      <div className="filter-section">
        <label>Category:</label>
        <select 
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="" hidden>
            Select Category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.replace("-", " ")}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label>Price:</label>
        <select
          value={filters.price}
          onChange={(e) => handleChange("price", e.target.value)}
        >
          <option value="" hidden>
            Select Price Range
          </option>
          <option value="low">Low (Under $50)</option>
          <option value="medium">Medium ($50 - $150)</option>
          <option value="high">High (Above $150)</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Gender:</label>
        <select
          value={filters.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
        >
          <option value="" hidden>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>

    
      <div className="filter-section">
        <label>Discount:</label>
        <input
          type="number"
          value={filters.discount}
          onChange={(e) => handleChange("discount", e.target.value)}
          placeholder="Enter Discount %"
        />
      </div>

    
      <div className="filter-section">
        <label>Customer Ratings:</label>
        <select
          value={filters.customerRatings}
          onChange={(e) => handleChange("customerRatings", e.target.value)}
        >
          <option value="" hidden>
            Select Ratings
          </option>
          <option value="1">1 Star & Above</option>
          <option value="2">2 Stars & Above</option>
          <option value="3">3 Stars & Above</option>
          <option value="4">4 Stars & Above</option>
        </select>
      </div>

     
      <div className="filter-section">
        <label>Availability:</label>
        <select
          value={filters.availability}
          onChange={(e) => handleChange("availability", e.target.value)}
        >
          <option value="" hidden>
            Select Availability
          </option>
          <option value="inStock">In Stock</option>
          <option value="outOfStock">Out of Stock</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
