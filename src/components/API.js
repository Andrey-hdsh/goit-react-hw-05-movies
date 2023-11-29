import axios from 'axios';

const KEY_API = 'c6abe789c2cce447fb640bf7c33e7b21';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `3/trending/all/week?api_key=${KEY_API}&include_adult=false&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchQuery = async query => {
  try {
    const response = await axios.get(
      `3/search/movie?api_key=${KEY_API}&query=${query}&include_adult=false&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const response = await axios.get(
      `3/movie/${id}?api_key=${KEY_API}&append_to_response=videos,images,credits&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieCredits = async id => {
  try {
    const response = await axios.get(
      `3/movie/${id}/credits?api_key=${KEY_API}&append_to_response=videos,images,credits&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieReviews = async id => {
  try {
    const response = await axios.get(
      `3/movie/${id}/reviews?api_key=${KEY_API}&append_to_response=videos,images,credits&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
