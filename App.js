import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Pages/SplashScreen';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import store from "./redux/store/store"
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
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
        <Stack.Screen name='MovieDetails' component={MovieDetails}
         options={{ headerShown: false }}
        
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </Provider>
     );
}
