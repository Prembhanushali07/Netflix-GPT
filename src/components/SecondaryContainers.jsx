import {useSelector} from 'react-redux';
import MovieList from './MovieList';
const SecondaryContainers = () => {
  const movies = useSelector(store => store.movies);
  const nowPlayingMovies = movies.nowPlayingMovies;
  return (
    <div className='bg-black'>
      <div className='relative -mt-78 z-20'>
      <MovieList title={"Now Playing"} Movies={nowPlayingMovies} />
      <MovieList title={"Now Playing"} Movies={nowPlayingMovies} />
      <MovieList title={"Now Playing"} Movies={nowPlayingMovies} />
      </div>
    </div>
  )
};

export default SecondaryContainers