import lovely from '../assets/movie_card/LovelyRunner.jpg';
import Layout from '../components/Layout';
import TitleCard from '../components/TitleCard';
function Movies() {
  return (
    <Layout>
      <div className="Movie-page">
        <img></img>
        <ul>
          <li>
            <img src={lovely} />
            lovely
          </li>
          <li>don</li>
          <li>doctor</li>
          <li>demon</li>
        </ul>
      </div>
    </Layout>
  );
}

export default Movies;
