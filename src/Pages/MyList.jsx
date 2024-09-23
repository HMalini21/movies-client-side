import { useState } from 'react';
import Layout from '../components/Layout';
import TitleCard from '../components/TitleCard';

function MyList() {
  const [movies, setMovies] = useState([]);

  return (
    <Layout>
      <div className="paddingTop">
        <TitleCard title={'My Favorites'} />
      </div>
    </Layout>
  );
}
export default MyList;
