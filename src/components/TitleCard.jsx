import Movies_Card from '../assets/movie_card/Moviecard';

export default function TitleCard() {
  return (
    <div className="title-crads">
      <h2>Popular On Netflix</h2>
      <div className="card-list">
        {Movies_Card.map((card, index) => {
          return (
            <div className="cards" key={index}>
              <img src={card.image} alt="" />
              <p>{card.movieName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
