import Header from "./Header"
import useNowPlayingMovies from "../useCustomHooks/useNowPlayingMovies";
import MainContainers from "./MainContainers";
import SecondaryContainer from "./SecondaryContainers";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainers/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse