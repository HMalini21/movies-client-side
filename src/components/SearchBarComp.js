import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [data, setData] = useState('');

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(data);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={handleInputChange}
          placeholder="Search for movies or shows..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
