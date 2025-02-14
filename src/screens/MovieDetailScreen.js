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
});

export default MovieDetailScreen;
