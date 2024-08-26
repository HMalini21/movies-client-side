import React from 'react';

const SearchResult = ({ result }) => {
  return (
    <div className="search-result">
      <img src={result.image} alt={result.title} />
      <div className="search-result-info">
        <h3>{result.title}</h3>
        <p>{result.year}</p>
      </div>
    </div>
  );
};

export default SearchResult;
