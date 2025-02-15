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
      backgroundColor: "#263238", 
    },
    image: {
      width: "100%",
      height: 400,
      borderRadius: 10,
      borderColor: "#90a4ae", 
      borderWidth: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#b0bec5", 
      marginTop: 15,
    },
    description: {
      fontSize: 16,
      color: "#90a4ae", 
      marginTop: 10,
    },
    reviewTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#78909c", 
      marginTop: 15,
    },
    reviewAuthor: {
      fontSize: 16,
      color: "#607d8b", 
      marginTop: 5,
    },
    reviewBody: {
      fontSize: 16,
      color: "#546e7a", 
      marginTop: 10,
    },
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#263238", 
    },
    errorText: {
      fontSize: 18,
      color: "#b0bec5", 
    },
  });

export default MovieDetailScreen;
