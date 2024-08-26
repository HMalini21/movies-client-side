import { useEffect, useRef, useState } from 'react';
import Movies_Card from '../assets/movie_card/Moviecard';

export default function TitleCard({ title, movies }) {
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setPlayingIndex(index);
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    setPlayingIndex(null);
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0;
  };

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
                  <img src={card.image} alt="" />
                  <p>{card.movieName}</p>
                </div>
              );
            })
          : Movies_Card.map((card, index) => {
              return (
                <div className="card" key={index}>
                  <div className="thumbnail-container">
                    <div
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      // className="video-container"
                    >
                      <img
                        src={card.image}
                        alt=""
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={card.videoSrc}
                        muted
                        style={{
                          width: '100%',
                          display: playingIndex === index ? 'block' : 'none',
                        }}
                      />
                    </div>
                  </div>

                  <p>{card.movieName}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
