import Header from "./Header"
import useNowPlayingMovies from "../useCustomHooks/useNowPlayingMovies";
import MainContainers from "./MainContainers";
import SecondaryContainer from "./SecondaryContainers";
import usePopularMovies from "../useCustomHooks/usePopularMovies";
import useTopRatedMovies from "../useCustomHooks/useTopRatedMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainers/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse