import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../API';
import Loader from 'components/Loader/Loader';
import './reviews.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDataCredits = async () => {
      setIsLoading(true);
      try {
        if (movieId) {
          const resultFetchReviews = await fetchMovieReviews(movieId);
          setReviews(resultFetchReviews);
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
    <div className="reviews-container">
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ul className="reviews-list">
          {reviews.map(review => (
            <li key={review.id}>
              <article>
                <p>
                  <b>{review.author_details.name || review.author}</b>
                </p>
                <p>{review.content}</p>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>We dont have any review fo this movie</p>
      )}
      {error && <p>Error, occurred, please reload page.</p>}
    </div>
  );
};

export default Reviews;
