import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Login';
import Description from './src/components/Description';
import SearchScreen from "./src/components/Search";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Book Store'}}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{title: 'Book Store'}}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Book Store'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
