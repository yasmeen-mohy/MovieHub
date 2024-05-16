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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Stack = createStackNavigator();
const bottomTab= createMaterialBottomTabNavigator();
export default function App() {
  function BottomTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarLabel: 'Favourites',
            tabBarIcon: ({ color }) => (
              <Icon name="favorite" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
 
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
