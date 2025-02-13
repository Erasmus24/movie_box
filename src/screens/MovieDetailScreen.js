import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
      <Text style={styles.actors}><Text style={styles.bold}>Actors:</Text> {movie.actors.join(', ')}</Text>
      <Text style={styles.reviews}><Text style={styles.bold}>Reviews:</Text> {movie.reviews.join('\n')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  actors: {
    fontSize: 16,
    marginBottom: 10,
  },
  reviews: {
    fontSize: 16,
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});
