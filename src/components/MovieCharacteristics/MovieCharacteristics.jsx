import React from 'react';
import { Link } from 'react-router-dom';

const MovieCharacteristics = ({ infoData }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    infoData;
  return (
    <div className="container-wrapp">
      {infoData.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      ) : (
        <p>No poster found</p>
      )}

      <div className="movie-details">
        <h1>
          {title} ({new Date(release_date).getFullYear()})
        </h1>
        <p>
          <b>User Score: {Math.floor(vote_average * 10)}%</b>
        </p>
        <p>{overview}</p>
        <p>
          <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
        </p>
        <p>
          <b>Additional information</b>
        </p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCharacteristics;
