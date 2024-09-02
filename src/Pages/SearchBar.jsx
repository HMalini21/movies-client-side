import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      // Replace this with your actual API call
      const response = await fetch(`http://localhost:2022/movies/search?q=${searchTerm}`); // Example API endpoint
      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  // Function to handle the search submission
  useEffect(() => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredMovies(results);
  }, [searchTerm, movies]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Layout>
      <div className="search-page">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for movies or shows..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </div>
        <div className="results-container">
          {filteredMovies.map((result) => (
            <div className="search-result" key={result.id}>
              <img
                src={result.image}
                style={{ width: '150px', height: '220px' }}
                alt={result.title}
              />
              <div className="search-result-info">
                <h3>{result.title}</h3>
                <p>{result.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
