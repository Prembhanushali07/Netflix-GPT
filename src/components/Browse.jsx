import Header from "./Header"
import useNowPlayingMovies from "../useCustomHooks/useNowPlayingMovies";
import MainContainers from "./MainContainers";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainers/>
    </div>
  )
}

export default Browse