import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getRandomImdbID = () => {
  const randomDigits = Math.floor(1000000 + Math.random() * 9000000); 
  return `tt${randomDigits}`;
};

const FALLBACK_IMAGE = "https://images.pexels.com/photos/603580/pexels-photo-603580.jpeg?auto=compress&cs=tinysrgb&w=600";

export const fetchRandomMovies = createAsyncThunk('movies/fetchRandom', async () => {
  const movies = [];

  while (movies.length < 10) {  
    const imdbID = getRandomImdbID();
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=&tt=${imdbID}`;

    try {
      const response = await axios.get(url);
      const data = response.data.short;

      if (response.data.ok && data.name && data["@type"] === "Movie") {
        movies.push({
          id: imdbID,
          title: data.name,
          image: data.image || FALLBACK_IMAGE,  
          description: data.description,
        });
      }
    } catch (error) {
      // Silently handle errors
    }
  }

  return movies;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchRandomMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = null;  
      });
  },
});

export default movieSlice.reducer;
