import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WeatherItem} from './WeatherItem'


export const HomePage = ({ navigation }) => {
    
    const [cities, setCities] = useState([
        {city_name: 'Lisboa', id : 'Lisboa'},
        {city_name: 'Madrid', id : 'Madrid'},
        {city_name: 'Paris', id : 'Paris'},
        {city_name: 'Berlim', id : 'Berlim'},
        {city_name: 'Copenhaga', id : 'Copenhaga'},
        {city_name: 'Roma', id : 'Roma'},
        {city_name: 'Londres', id : 'Londres'},
        {city_name: 'Dublin', id : 'Dublin'},
        {city_name: 'Praga', id : 'Praga'},
        {city_name: 'Viena', id : 'Viena'},
    ])

    useEffect(() => {
      const coord = {
        lat : '40.897222',
        lon : '-8.488889',
        id : 'geolocation'
      }

      setCities(cities => [coord, ...cities])
    }, []);

    

    const WeatherDetailList = cities.map(city => 
        <WeatherItem navigation={navigation} key={city.id} city={city} />
    );

    return (
        <View style={styles.container}>
            {WeatherDetailList}
            <StatusBar style="auto" />
        </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
  });