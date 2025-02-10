import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPlayingTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addNowPlayingTrailer: (state,action)=>{
            state.nowPlayingTrailer = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies , addNowPlayingTrailer, addPopularMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;