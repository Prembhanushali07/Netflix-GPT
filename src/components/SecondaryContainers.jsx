import {useSelector} from 'react-redux';
import MovieList from './MovieList';
const SecondaryContainers = () => {
  const movies = useSelector(store => store.movies);
  const nowPlayingMovies = movies.nowPlayingMovies;
  const popularMovies = movies.popularMovies;
  const topRatedMovies = movies.topRatedMovies;
  return (
    <div className='bg-black'>
      <div className='relative -mt-78 z-20'>
      <MovieList title={"Now Playing"} Movies={nowPlayingMovies} />
      <MovieList title={"Popular Movies"} Movies={popularMovies} />
      <MovieList title={"Top Rated Movies"} Movies={topRatedMovies} />
      </div>
    </div>
  )
};

export default SecondaryContainers