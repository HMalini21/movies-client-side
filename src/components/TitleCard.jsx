import { useEffect, useRef, useState } from 'react';
import Movies_Card from '../assets/movie_card/Moviecard';
import VideoThumbnail from './VideoThumbnail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function TitleCard({ title, movies, favorites, setFavorites }) {
  const cardsRef = useRef();

  const handleScroll = (event) => {
    event.preventDefault();
    cardsRef.current.srollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener('scroll', handleScroll);
  }, []);

  const handleFavorites = (movie) => {
    setFavorites((prevsFav) => [...prevsFav, movie]);
    console.log(favorites);
  };

  return (
    <div className="title-crads">
      <h2>{title ? title : 'Popular On Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {movies
          ? movies.map((card, index) => {
              return (
                <div className="card" key={index}>
                  <VideoThumbnail
                    imageSrc={card.image}
                    videoSrc={card.video}
                    altText="teaser"
                    title={card.title}
                    summary={card.summary}
                  />
                  <div className="card-info">
                    <p>{card.title}</p>
                    <div onClick={() => handleFavorites(movies)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                </div>
              );
            })
          : Movies_Card.map((card, index) => {
              return (
                <div className="card" key={index}>
                  <VideoThumbnail imageSrc={card.image} videoSrc={card.videoSrc} />
                  <p>{card.movieName}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
