import { useEffect } from "react";
import { fetchMovieOptions } from "../utils/constants";
import { addNowPlayingTrailer } from "../utils/movieslice";
import { useDispatch } from "react-redux";

const useTrailerOfMovie = ({movie_id}) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      fetchMovieOptions
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addNowPlayingTrailer(trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);

  return (
  <div>
    
  </div>
  );
};

export default useTrailerOfMovie;
