import { useSelector } from "react-redux"
import VideoTitles from "./VideoTitles"
import VideoBackground from "./VideoBackground";


const MainContainers = () => {
  const movies = useSelector(store=> store.movies?.nowPlayingMovies);
  if(movies === null) return;
  const mainMovie = movies?.[0];
  console.log(mainMovie);
  const {original_title, overview,id} = mainMovie;
  return (
    <div>
      <VideoTitles title={original_title} overview={overview} />
      <VideoBackground movie_id={id}/>
      
    </div>
  )
}

export default MainContainers