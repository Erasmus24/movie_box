import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function MovieDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Detail Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
