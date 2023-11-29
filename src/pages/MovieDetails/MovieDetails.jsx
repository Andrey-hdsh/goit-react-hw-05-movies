import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import './movieDetails.css';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MovieCharacteristics from 'components/MovieCharacteristics/MovieCharacteristics';
import { fetchMovieDetails } from 'components/API';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const backLinkRef = useRef(location);

  const [filmInfo, setFilmInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (movieId) {
          const response = await fetchMovieDetails(movieId);
          setFilmInfo(response);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId, setError]);

  return (
    <div className="container">
      <Link to={backLinkRef.current.state?.from ?? '/'} className="back-link">
        <b>BACK</b>
      </Link>
      {isLoading && <Loader />}
      {filmInfo && (
        <>
          <MovieCharacteristics infoData={filmInfo} />
          <Outlet />
        </>
      )}
      {error && (
        <p className="error-message">
          Sorry, there is no information about the film at the moment.
        </p>
      )}
    </div>
  );
};

export default MovieDetails;



