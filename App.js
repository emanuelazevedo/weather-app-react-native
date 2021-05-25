import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomePage} from './components/HomePage'
import {WeatherDetail} from './components/WeatherDetail'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        {/* <Stack.Screen name="HomePage">
          {props => <HomePage {...props} cities={cities} />}
        </Stack.Screen> */}
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={WeatherDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}


