import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMovies } from "../redux/movieSlice";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar";

const HomeScreen = ({ navigation }) => { 
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchRandomMovies());
  }, [dispatch]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Box</Text>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredMovies}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({ item }) => (
            <MovieCard
              movie={item} 
              onPress={() => navigation.navigate("MovieDetail", { movie: item })}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    paddingTop: 3,
  },
});

export default HomeScreen;
