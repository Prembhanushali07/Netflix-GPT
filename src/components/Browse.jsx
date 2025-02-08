import Header from "./Header"
import useNowPlayingMovies from "../useCustomHooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse