import sh_title from '../assets/title-sh.png';
import sh_bannerTwo from '../assets/netflix-sweet-home-2.jpg';
import moreinfo from '../assets/moreinfopng.com.png';
import TitleCard from '../components/TitleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TvShow() {
  const [tvShows, setTvShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [fantasy, setFantasy] = useState([]);
  const [scifi, setScifi] = useState([]);
  const [romcom, setRomcom] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [horror, setHorror] = useState([]);
  const [comedy, setComedy] = useState([]);

  async function getTvShowFromAPI() {
    try {
      setIsLoading(true);
      const response = await axios
        .get('http://localhost:2022/netflix?category=6')
        .then((res) => setTvShows(res.data.message));
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
        .get('http://localhost:2022/genres/category-genre?genre=1&catry=6')
        .then((res) => setFantasy(res.data.message));
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
        .get('http://localhost:2022/genres/category-genre?genre=5&catry=6')
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
        .get('http://localhost:2022/genres/category-genre?genre=6&catry=6')
        .then((res) => setComedy(res.data.message));
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
        .get('http://localhost:2022/genres/category-genre?genre=2&catry=6')
        .then((res) => setScifi(res.data.message));
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
        .get('http://localhost:2022/genres/category-genre?genre=4&catry=6')
        .then((res) => setThriller(res.data.message));
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
        .get('http://localhost:2022/genres/category-genre?genre=3&catry=6')
        .then((res) => setRomcom(res.data.message));
      setMessage('');
    } catch (error) {
      setMessage(error.message || error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getFantasyFromAPI(),
      getTvShowFromAPI(),
      getScifiFromAPI(),
      getRomcomFromAPI(),
      getThrillerFromAPI(),
      getHorrorFromAPI(),
      getComdeyFromAPI();
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
            {IsLoading ? <p>Please wait!</p> : <TitleCard movies={tvShows} />}

            {/* <TitleCard /> */}
          </div>
        </div>
        <div className="more-cards">
          {IsLoading ? <p>Please wait!</p> : <TitleCard title={'Top Shows'} movies={tvShows} />}
          <TitleCard title={'Entertainment'} movies={fantasy} />
          <TitleCard title={'Entertainment'} movies={scifi} />
          <TitleCard title={'Entertainment'} movies={romcom} />
          <TitleCard title={'Entertainment'} movies={thriller} />
          <TitleCard title={'Entertainment'} movies={horror} />
          <TitleCard title={'Entertainment'} movies={comedy} />
        </div>
      </div>
    </Layout>
  );
}

export default TvShow;
