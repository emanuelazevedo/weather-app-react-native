import React, {useState, useEffect, useReducer} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import {openweatherAPI} from '../api/openweatherAPI'
import reducer from '../reducer/reducer'
import axios from 'axios'
import {API_KEY} from "@env";


export const WeatherItem = ({city, navigation}) => {
    const [state, dispatch] = useReducer(reducer, {initialState: ''})
    const [weatherData, setWeatherData] = useState('')

    console.log('initialstate', state.initialState)
    

    useEffect(() => {
        if(city.city_name) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.city_name}&appid=${API_KEY}&units=metric`)
                .then(res => {
                    dispatch({
                        type: 'ADD_CITY',
                        payload: res.data
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        } else {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`)
                .then(res => {
                    dispatch({
                        type: 'ADD_CITY',
                        payload: res.data
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        }
        
    }, [city])
    

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', {weatherData: state.initialState[0]})}>
            
            {state.initialState ? 
                <View style={styles.itemContainer}>
                    <View style={styles.itemRight}>
                        <Image 
                            style={styles.tinyLogo}
                            source={{uri: `http://openweathermap.org/img/w/${state.initialState[0].weather[0].icon}.png`}}
                        />
                        <Text style={styles.weatherDescription}>{state.initialState[0].weather[0].description}</Text>
                    </View>
                    
                    <View style={styles.itemLeft}>
                        <Text style={styles.tempFont}>{state.initialState[0].main.temp}ºC</Text>
                        <Text style={styles.cityFont}>{state.initialState[0].name}</Text>
                    </View>
                    
                    
                    
                </View>
                : null}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 70,
        height: 70,
    },
    item: {
        flex: 1,
        width: '80%',
        height: 170,
        backgroundColor: '#d4e4f1',
        marginTop: '20px',
        marginBottom: '5px',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#bdcdda',
        
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: '20px',
        justifyContent: "space-between",
    },
    itemRight: {
        fontSize: 20,
        alignItems: 'right',
    },
    itemLeft: {
        alignItems: 'center',
        
    },
    tempFont: {
        fontSize: 25,
        marginBottom: '35px',
        marginTop: '10px',
        textAlign:'right'
    },
    cityFont: {
        fontSize: 15,
        textAlign:'right'
    },
    weatherDescription: {
        textAlign: 'center',
    }
    
});