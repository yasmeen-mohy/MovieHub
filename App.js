import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Pages/SplashScreen';
import Home from './Pages/Home';
import store from "./redux/store/store"
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="SplashScreen"
         component={SplashScreen} 
         options={{ headerShown: false }}
        />
        <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
     );
}
