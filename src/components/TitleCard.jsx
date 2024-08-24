import { useEffect, useRef, useState } from 'react';
import Movies_Card from '../assets/movie_card/Moviecard';

export default function TitleCard({ title, movies }) {
  const [isHovered, setIsHovered] = useState(false);

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
                  <div
                    className="thumbnail-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                      position: 'relative',
                      width: '300px',
                      height: '170px',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                      zIndex: isHovered ? 10 : 1,
                      borderRadius: '8px',
                    }}
                  >
                    <img
                      src={card.image}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: isHovered ? 'none' : 'block',
                      }}
                    />
                    {isHovered && (
                      <video
                        src={card.videoSrc}
                        autoPlay
                        loop
                        muted
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                  </div>

                  <p>{card.movieName}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
