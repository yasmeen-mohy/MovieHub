import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async () => {
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7");
    return res.data.results;
  }
);

const allMoviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      console.log("Error fetching movies", action.error);
    });
  },
});

export default allMoviesSlice.reducer;
