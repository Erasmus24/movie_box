import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search movies..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 10,
      backgroundColor: "#455a64", 
      borderRadius: 10,
      marginBottom: 15,
    },
    input: {
      fontSize: 16,
      color: "#f5f5f5", 
    },
  });

export default SearchBar;
