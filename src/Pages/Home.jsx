// import Navbar from '../components/Navbar';
import sh_title from '../assets/title-sh.png';
import sh_bannerTwo from '../assets/netflix-sweet-home-2.jpg';
import moreinfo from '../assets/moreinfopng.com.png';
import TitleCard from '../components/TitleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [kdrama, setKdrama] = useState([]);
  const [anime, setAnime] = useState([]);
  const [series, setSeries] = useState([]);
  const [hollywood, setHollywood] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [message, setMessage] = useState(false);

  async function getMoviesFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/movies/getMovies')
        .then((res) => setMovies(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getkdramaFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/netflix/kdrama')
        .then((res) => setKdrama(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getAnimeFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/netflix/anime')
        .then((res) => setAnime(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getSeriesFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/netflix/series')
        .then((res) => setSeries(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getHollywoodFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/netflix/hollywood')
        .then((res) => setHollywood(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getMovieFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/netflix/movie')
        .then((res) => setMovie(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMoviesFromAPI();
    getkdramaFromAPI();
    getAnimeFromAPI();
    getSeriesFromAPI();
    getHollywoodFromAPI();
    getMovieFromAPI();
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
          <TitleCard title={'Movies'} movies={movie} />
          <TitleCard title={'Kdramas'} movies={kdrama} />
          <TitleCard title={'Anime'} movies={anime} />
          <TitleCard title={'Series'} movies={series} />
          <TitleCard title={'Hollywood'} movies={hollywood} />
        </div>
      </div>
    </Layout>
  );
}
