import sh_title from '../assets/title-sh.png';
import sh_bannerTwo from '../assets/netflix-sweet-home-2.jpg';
import moreinfo from '../assets/moreinfopng.com.png';
import TitleCard from '../components/TitleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

function NewAndPopular() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [movies, setMovies] = useState([]);
  const [fantasy, setFantasy] = useState([]);
  const [scifi, setScifi] = useState([]);
  const [romcom, setRomcom] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [horror, setHorror] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [movie, setMovie] = useState([]);

  async function getMoviesFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/netflix?category=1')
        .then((res) => setMovies(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getScifiFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/genres/category-genre?genre=4&catry=7')
        .then((res) => setScifi(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getRomcomFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/genres/category-genre?genre=4&catry=7')
        .then((res) => setRomcom(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getThrillerFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/genres/category-genre?genre=4&catry=7')
        .then((res) => setThriller(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  async function getHorrorFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/genres/category-genre?genre=4&catry=7')
        .then((res) => setHorror(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  async function getComdeyFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/genres/category-genre?genre=4&catry=7')
        .then((res) => setComedy(res.data.message));
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
        .get('http://localhost:2022/genres/category-genre?genre=4&catry=7')
        .then((res) => setMovie(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  async function getFantasyFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/genres/category-genre?genre=4&catry=7')
        .then((res) => setFantasy(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMoviesFromAPI(),
      getScifiFromAPI(),
      getRomcomFromAPI(),
      getThrillerFromAPI(),
      getHorrorFromAPI(),
      getComdeyFromAPI(),
      getMovieFromAPI();
    getFantasyFromAPI();
  }, []);

  return (
    <Layout>
      <div className="home">
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
            {isLoading ? <p>Please wait!</p> : <TitleCard movies={movie} />}
          </div>
        </div>
        <div className="more-cards">
          <TitleCard title={'Fantasy Movies'} movies={fantasy} />
          <TitleCard title={'SciFi'} movies={scifi} />
          <TitleCard title={'Romance and Comedy'} movies={romcom} />
          <TitleCard title={'Horror'} movies={horror} />
          <TitleCard title={'Thriller'} movies={thriller} />
          <TitleCard title={'Comdey'} movies={comedy} />
          <TitleCard title={'Movie'} movies={movie} />
        </div>
      </div>
    </Layout>
  );
}

export default NewAndPopular;
