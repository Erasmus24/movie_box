import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FALLBACK_IMDB_IDS = [
  "tt29623480", "tt26446278", "tt1684562", "tt0167260", "tt0468569",
  "tt0111161", "tt0109830", "tt0103064", "tt0088763", "tt13186482",
  "tt9362722", "tt1853728", "tt1345836", "tt2380307", "tt0114709",
  "tt4154796", "tt6966692", "tt0264464"
];

const MIN = 1000000;
const MAX = 9999999;
const RANGE = MAX - MIN + 1;

const getRandomImdbID = () => {
  const randomDigits = Math.floor(Math.random() * RANGE) + MIN;
  return "tt" + randomDigits;
};

const FALLBACK_IMAGE = "https://images.pexels.com/photos/603580/pexels-photo-603580.jpeg?auto=compress&cs=tinysrgb&w=600";

export const fetchRandomMovies = createAsyncThunk('movies/fetchRandom', async () => {
  const movies = [];
  const usedFallbacks = new Set();

  while (movies.length < 10) {
    let imdbID = getRandomImdbID();
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=&tt=${imdbID}`;

    try {
      const response = await axios.get(url);
      const data = response.data.short;

      if (response.data.ok && data.name && data["@type"] === "Movie") {
        movies.push({
          id: imdbID,
          title: data.name,
          image: data.image || FALLBACK_IMAGE,
          description: data.description || "No description available.",
        });
      }
    } catch (error) {
      let fallbackImdbID;
      do {
        fallbackImdbID = FALLBACK_IMDB_IDS[Math.floor(Math.random() * FALLBACK_IMDB_IDS.length)];
      } while (usedFallbacks.has(fallbackImdbID)); 

      usedFallbacks.add(fallbackImdbID);

      const fallbackUrl = `https://imdb.iamidiotareyoutoo.com/search?q=&tt=${fallbackImdbID}`;
      try {
        const fallbackResponse = await axios.get(fallbackUrl);
        const fallbackData = fallbackResponse.data.short;
        if (fallbackResponse.data.ok && fallbackData.name && fallbackData["@type"] === "Movie") {
          movies.push({
            id: fallbackImdbID,
            title: fallbackData.name,
            image: fallbackData.image || FALLBACK_IMAGE,
            description: fallbackData.description || "No description available.",
          });
        }
      } catch (fallbackError) {
        // If fallback also fails, silently handle the error and skip this fallback.
      }
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
      .addCase(fetchRandomMovies.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch movies";  
      });
  },
});

export default movieSlice.reducer;
