import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm)
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm)
    }
  };

  return (
    <div className="search-bar">
<input
        type="text"
        placeholder="Search..."
        style={{ padding: '8px', marginRight: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />      <button className="search-icon" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
