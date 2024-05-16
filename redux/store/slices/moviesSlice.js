import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async () => {
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7");
    return res.data.results;
  }
);


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favourites:[],
    status: "idle",
    error: null,
  },
  reducers: {
    addToFav: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFromFav:(state,action) =>{
      state.favourites.filter((m)=>m.id!==action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { addToFav ,removeFromFav} = moviesSlice.actions; 
export default moviesSlice.reducer;