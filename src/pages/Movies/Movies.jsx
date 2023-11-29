import React, { useState, useEffect } from 'react';
import { fetchQuery } from '../../components/API';
import toast, { Toaster } from 'react-hot-toast';
import Loader  from 'components/Loader/Loader';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import './movies.css'

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error ,setError] = useState(false);
  const location = useLocation();

  const [serchParams, setSerchParams] = useSearchParams();

  const paramsUrl = serchParams.get('query') || '';

  useEffect(() => {
    const getSearchData = async () => {
      try {
        if (paramsUrl !== '') {
          setLoading(true);
          setError(false);

          const resultQuery = await fetchQuery(paramsUrl);

          if (!resultQuery.length) {
            toast.error(
              'Sorry,there are no films for this request. Try something different.'
            );
          }
          setMovies(resultQuery);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getSearchData();
  }, [paramsUrl , setError ]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const targetQuery = evt.target.query.value.trim();
    if (targetQuery === '') {
      toast.error('Please enter your request!');
    }
    setSerchParams({ query: targetQuery });
    evt.target.reset();
  
  };

  return (
    <div className='container-movie'>
      <form onSubmit={handleSubmit} className='search-form'>
        <button type="submit">Search</button>
        <input name="query" type="text" autoFocus placeholder="Search movies" />
      </form>

      <div className="list">
        {isLoading && <Loader />}

        {movies.map(movie => (
            <Link to={`/movies/${movie.id}`}
              state={{ from: location }}
              key={movie.id}
              className="movie-item"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (!error &&
                <p>No Poster Available</p>
              )}
              <h3>{movie.title}</h3>
            </Link>
          
        ))}
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default Movies;
