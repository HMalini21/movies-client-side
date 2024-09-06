import { useEffect, useRef, useState } from 'react';
import Movies_Card from '../assets/movie_card/Moviecard';
import VideoThumbnail from './VideoThumbnail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function TitleCard({ title, movies }) {
  const [clicked, isClicked] = useState(false);
  const videoRefs = useRef([]);

  // const handleMouseEnter = (index) => {
  //   setPlayingIndex(index);
  //   videoRefs.current[index].play();
  // };

  // const handleMouseLeave = (index) => {
  //   setPlayingIndex(null);
  //   videoRefs.current[index].pause();
  //   videoRefs.current[index].currentTime = 0;
  // };

  const cardsRef = useRef();

  const handleScroll = (event) => {
    event.preventDefault();
    cardsRef.current.srollLeft += event.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener('scroll', handleScroll);
  }, []);
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
                    {clicked ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        size="1x"
                        key={index}
                        onClick={() => isClicked(false)}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faPlus} size="1x" onClick={() => isClicked(true)} />
                    )}
                  </div>
                </div>
              );
            })
          : Movies_Card.map((card, index) => {
              return (
                <div className="card" key={index}>
                  <VideoThumbnail imageSrc={card.image} videoSrc={card.videoSrc} />
                  <div className="card-info">
                    <p>{card.movieName}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
