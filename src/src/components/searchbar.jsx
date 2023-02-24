import React from "react";

const SearchBar = ({ width, searchQuery, setSearchQuery }) => {
  return (
    <input
      style={{ width }}
      id="searchbar"
      placeholder="Search..."
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      autoComplete="off"
    />
  );
};

export default SearchBar;
