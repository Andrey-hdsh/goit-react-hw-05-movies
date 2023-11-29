import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../API';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import './cast.css';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDataCredits = async () => {
      setIsLoading(true);
      try {
        if (movieId) {
          const resultFetchCredits = await fetchMovieCredits(movieId);
          setCredits(resultFetchCredits);

          if (resultFetchCredits && resultFetchCredits.cast) {
            setCredits(resultFetchCredits);
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataCredits();
  }, [movieId]);

  return (
    <div className="cast-container">
      {isLoading && <Loader />}
      {credits.length > 0 ? (
        <ul className="cast-list">
          {credits.map(credit => (
            <li key={credit.id}>
              {credit.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                  alt={credit.name}
                />
              ) : (
                <p>No image found</p>
              )}
              <p>
                <b>{credit.name}</b>
              </p>
              {credit.character ? (
                <p>Character: {credit.character}</p>
              ) : (
                <p>no information</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        !error && <p> No cast information available</p>
      )}

      {error && <p>Error, occurred, please reload page.</p>}
    </div>
  );
};

export default Cast;
