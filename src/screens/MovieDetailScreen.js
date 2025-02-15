import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params || {};

  if (!movie) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: Movie details not available.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>

      <View style={styles.actorsContainer}>
        <Text style={styles.actorsTitle}>Actors:</Text>
        <Text style={styles.actors}>{movie.actors || "Actors unavailable"}</Text>
      </View>

      <View style={styles.reviewContainer}>
        <Text style={styles.reviewTitle}>Review:</Text>
        <Text style={styles.reviewBody}>{movie.review || "No review available"}</Text>
        <Text style={styles.reviewAuthor}>By: {movie.reviewAuthor || "Author unavailable"}</Text>
        <Text style={styles.reviewTitleText}>Title: {movie.reviewTitle || "Review Title unavailable"}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  actorsContainer: {
    marginTop: 20,
  },
  actorsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  actors: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  reviewContainer: {
    marginTop: 20,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  reviewBody: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  reviewAuthor: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  reviewTitleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
    marginTop: 5,
  },
});

export default MovieDetailScreen;
