import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MovieCard = ({ movie, onPress }) => {
  if (!movie || !movie.title) return null; 

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: movie.image }} style={styles.image} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {movie.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#37474f", 
      borderRadius: 10,
      padding: 10,
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    image: {
      width: "100%",
      height: 200,
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      color: "#b0bec5", 
    },
    description: {
      fontSize: 14,
      color: "#90a4ae", 
      marginTop: 5,
    },
  });

export default MovieCard;
