import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieslice";
import { fetchMovieOptions } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = ()=> {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
    const data = await fetch ('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',fetchMovieOptions);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
};

export default useNowPlayingMovies;