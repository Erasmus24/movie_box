import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./src/redux/store"; 
import HomeScreen from "./src/screens/HomeScreen";
import MovieDetailScreen from "./src/screens/MovieDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#37474f", 
            },
            headerTintColor: "#f5f5f5",
            headerTitleStyle: {
              fontWeight: "bold", 
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
