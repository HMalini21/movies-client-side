// import Navbar from '../components/Navbar';
import sh_title from '../assets/title-sh.png';
import sh_bannerTwo from '../assets/netflix-sweet-home-2.jpg';
import moreinfo from '../assets/moreinfopng.com.png';
import TitleCard from '../components/TitleCard';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  async function getMoviesFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/movies/getMovies')
        .then((res) => setMovies(res.data.rows));
      setMovies(response.data.movies);
      setTotalPages(response.data.totalCount / pageSize);
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMoviesFromAPI();
  }, []);

  return (
    <Layout>
      <div className="home">
        {/* <Navbar /> */}
        <div className="home-sweet">
          <img src={sh_bannerTwo} className="banner-img" />
          <div className="hs-caption">
            <img src={sh_title} className="caption-img" />
            <p>
              Hyun, a loner high school student who lost his entire family in a terrible accident,
              is forced to leave his home and has to face a new reality where monsters are trying to
              wipe out all of humanity.
            </p>
            <div className="hs-btns">
              <button className="btn">
                <FontAwesomeIcon icon={faPlay} style={{ color: '#000000' }} />
                Play
              </button>
              <button className="btn dark-btn">
                <img src={moreinfo} alt="moreinfo-button" />
                More Info
              </button>
            </div>
            {IsLoading ? <p>Please wait!</p> : <TitleCard movies={movies} />}
          </div>
        </div>
        <div className="more-cards">
          <TitleCard title={'BlockBuster Movies'} />
          <TitleCard title={'Kdramas'} />
          <TitleCard title={'Top Picks For You'} />
          <TitleCard title={'Anime'} />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
