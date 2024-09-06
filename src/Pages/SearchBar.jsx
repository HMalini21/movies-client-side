import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://localhost:2022/movies/search?q=${searchTerm}`);
      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);

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
        </div>
        <div className="results-container">
          {filteredMovies.map((movie) => (
            <div className="search-result" key={movie.id}>
              <img
                src={movie.image}
                style={{ width: '150px', height: '220px' }}
                alt={movie.title}
              />
              <div className="search-result-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
