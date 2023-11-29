import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { fetchTrendingMovies } from '../../components/API';
import './home.css'

 const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const resultData = await fetchTrendingMovies();
        setMovies(resultData.results);
      } catch (error) {}
    };
    fetchedData();
  }, []);

  return (
    <div className='container-home'>
      <h1>Trending today</h1>
      <ul className='list'>
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
            <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <p>No Poster Available</p>
              )}
              <h3>{movie.title || movie.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home; 
