import { useSelector} from "react-redux";
import useTrailerOfMovie from "../useCustomHooks/useTrailerOfMovie";

const VideoBackground = (movie_id) => {
  useTrailerOfMovie(movie_id);
  const trailerKey = useSelector(
    (store) => store.movies?.nowPlayingTrailer?.key
  );
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
