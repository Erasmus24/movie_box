import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MovieDetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Movie Detail Screen Beginning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
