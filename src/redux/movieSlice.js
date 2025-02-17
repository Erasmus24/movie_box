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
const getRandomImdbID = () => "tt" + (Math.floor(Math.random() * RANGE) + MIN);

const FALLBACK_IMAGE = "https://images.pexels.com/photos/603580/pexels-photo-603580.jpeg?auto=compress&cs=tinysrgb&w=600";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

//TODO: Must make the search dynamic meaning that it must search for movies throughout the API.

const fetchMovies = async (imdbIds) => {
  const movies = [];

  for (const imdbID of imdbIds) {
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
          actors: data.actor?.map(actor => actor.name).join(", ") || "Actors unavailable",
          review: data.review?.reviewBody || "No review available",
          reviewAuthor: data.review?.author.name || "Author unavailable",
        });
      }
    } catch (error) {
      //silent error handling
    }
  }

  return movies;
};

export const fetchRandomMovies = createAsyncThunk('movies/fetchRandom', async () => {
  const randomImdbIDs = Array.from({ length: 10 }, getRandomImdbID);

  const randomMoviesPromise = fetchMovies(randomImdbIDs);

  const timeoutPromise = new Promise(resolve =>
    setTimeout(async () => {
      console.warn("Random ID's took too long. Using fallback movie ID's.");

      const shuffledFallbackIDs = shuffleArray(FALLBACK_IMDB_IDS).slice(0, 10);
      resolve(await fetchMovies(shuffledFallbackIDs));
    }, 2000)
  );

  return Promise.race([randomMoviesPromise, timeoutPromise]);
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
