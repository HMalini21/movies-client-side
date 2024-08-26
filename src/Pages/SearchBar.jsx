import React from 'react';
import SearchBar from '../components/SearchBarComp';
import SearchResult from '../components/SearchResult';
import Layout from '../components/Layout';

const SearchPage = () => {
  const demo = [
    {
      id: 1,
      title: 'Master',
      image: 'https://images.indianexpress.com/2021/01/master.jpg?w=350',
      year: '2024',
    },
    {
      id: 2,
      title: 'Prince',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Prince_2022_poster.jpg',
      year: '2023',
    },
    {
      id: 3,
      title: 'Ayan',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Prince_2022_poster.jpg',
      year: '2022',
    },
    {
      id: 4,
      title: 'Anegan',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Prince_2022_poster.jpg',
      year: '2022',
    },

    // Add more dummy data as needed
  ];

  return (
    <Layout>
      <div className="search-page">
        <SearchBar onSearch={() => {}} /> {/* Empty search handler for layout demo */}
        <div className="results-container">
          {demo.map((result) => (
            <SearchResult key={result.id} result={result} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
