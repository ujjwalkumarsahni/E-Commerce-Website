import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import "./Marketplace.css";
import Card from "../AllCard/Card.jsx";
import FilterComponent from "./FilterComponent.jsx";
import { MarketEffectCard } from "../ShimmerEffect/MarketEffectCard.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

const Marketplace = () => {
  const { isDarkMode } = useOutletContext();

  const [filterToggle, setFilterToggel] = useState(false);

  const handFilterToggle = () => {
    setFilterToggel(!filterToggle);
  };

  const [marketProducts, setMarketProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    brand: "",
    gender: "",
    discount: "",
    customerRatings: "",
    availability: "",
  });
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

 
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setMarketProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    let filtered = marketProducts;

  
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

 
    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.price) {
      filtered = filtered.filter((product) => {
        if (filters.price === "low") return product.price < 50;
        if (filters.price === "medium")
          return product.price >= 50 && product.price <= 150;
        if (filters.price === "high") return product.price > 150;
        return true;
      });
    }

   
    if (filters.gender) {
      filtered = filtered.filter(
        (product) => product.gender === filters.gender
      );
    }

  
    if (filters.discount) {
      filtered = filtered.filter(
        (product) => product.discountPercentage >= filters.discount
      );
    }

   
    if (filters.customerRatings) {
      filtered = filtered.filter(
        (product) => product.rating >= filters.customerRatings
      );
    }

 
    if (filters.availability) {
      filtered = filtered.filter((product) =>
        filters.availability === "inStock"
          ? product.stock > 0
          : product.stock === 0
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, filters, marketProducts]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div
      className={`marketplace_container ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      {/* Filter Section */}
      <div
        className={`marketplace_filter ${filterToggle ? "visible" : ""} ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <FilterComponent onFilterChange={handleFilterChange} />
      </div>

      {/* Product Section */}
      <div className="marketplace_product">
        <div className="marketplace_header">
          <p>Buy Now</p>
          <div className="hamburger-filter" onClick={handFilterToggle}>
            {filterToggle ? (
              <FaTimes className="hamburger-icon-filter-cross" />
            ) : (
              <FaBars className="hamburger-icon-filter" />
            )}
          </div>
        </div>

        <div className="marketplace_card">
          {filteredProducts == 0 ? (
            <MarketEffectCard />
          ) : (
            filteredProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.thumbnail}
                rating={product.rating}
                reviewlength={product.reviews.length}
                discountPercentage={product.discountPercentage}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
