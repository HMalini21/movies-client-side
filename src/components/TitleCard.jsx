import { useEffect, useRef } from 'react';
import Movies_Card from '../assets/movie_card/Moviecard';

export default function TitleCard({ title, category }) {
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
        {Movies_Card.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.movieName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
