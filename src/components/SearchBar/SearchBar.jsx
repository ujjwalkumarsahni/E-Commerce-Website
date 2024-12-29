import React from "react";

const SearchBar = ({searchQuery,setSearchQuery,isSearch}) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
      const handleSearch = () => {
        console.log("Searching for:", searchQuery);
        // Implement your search logic here
      };
  return (
    <>
      <div className={`search-bar ${isSearch ? "active1" : ""} `}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for Products, Brands and More"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>
          🔍
        </button>
      </div>
    </>
  );
};

export default SearchBar;
