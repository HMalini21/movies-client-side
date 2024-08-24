import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    // <Layout>
    <div className="search-bar">
      <div>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </div>
      <div>
        <input type="text"></input>
      </div>
    </div>
    // </Layout>
  );
}

export default SearchBar;
