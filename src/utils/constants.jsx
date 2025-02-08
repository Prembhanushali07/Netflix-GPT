export const fetchMovieOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_API_OPTION_AUTHORIZATION,
    }
  };