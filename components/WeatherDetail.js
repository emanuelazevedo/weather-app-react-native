import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export const WeatherDetail = ({route}) => {
    const weatherData = route.params.weatherData
    return (
        <View style={styles.container}>
            <View style={styles.topInfo}>
                <View style={styles.topInfoWeather}>
                    <Image 
                        style={styles.tinyLogo}
                        source={{uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}}
                    />
                    <Text>{weatherData.weather[0].description}</Text>
                </View>
                <View style={styles.topInfoCity}>
                    <Text style={styles.topInfoCityName}>{weatherData.name}</Text>
                </View>  
            </View>
            <View style={styles.temperatures}>
                <View style={styles.temperatureValue}>
                    <Text style={styles.temperatureText}>{weatherData.main.temp} ºC</Text>
                </View>
                <View style={styles.temperatureMaxMin}>
                    <Text style={styles.temperatureMaxText}>{weatherData.main.temp_max} ºC</Text>
                    <Text style={styles.temperatureMinText}>{weatherData.main.temp_min} ºC</Text>
                </View>
            </View>
            <View style={styles.wind}>
                <Text style={styles.windText}>{weatherData.wind.deg}º</Text>
                <Image
                    style={styles.windLogo}
                    source= {{uri: `https://www.pikpng.com/pngl/b/91-912215_wind-clipart-breeze-clip-art-transparent-wind-png.png`}}
                />
                <Text style={styles.windText}>{weatherData.wind.speed} m/s</Text>
            </View>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d4e4f1',
    },
    tinyLogo: {
        width: 90,
        height: 90,
    },
    topInfo: {
        flex: 1,
        flexDirection: "row",
        marginTop: '30px',
        width: '70%',
        justifyContent: "space-between",

    },
    topInfoWeather: {
        flex: 1,
    },
    topInfoCity: {
        flex: 1,
        fontSize: '40px'
    },
    topInfoCityName: {
        fontSize: '25px',
        marginTop: '25px'
    },
    temperatures: {
        flex: 1,
        flexDirection: "row",
        // justifyContent: "space-between",
        // textAlign: 'center',
        // width: '35%',
    },
    // temperatureValue: {
    //     flex: 1,
    // },
    // temperatureMaxMin: {
    //     flex: 1,  
    // },
    temperatureText: {
        // textAlign: 'center',
        fontSize: '25px',
        backgroundColor: 'yellow',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingTop: '17px',
        paddingBottom: '17px',
        paddingRight: '5px',
        paddingLeft: '5px',
        // marginTop: '5px',
    },
    temperatureMaxText: {
        // textAlign: 'center',
        fontSize: '25px',
        backgroundColor: 'red',
        color: 'white',
        borderTopRightRadius: 10,
        paddingTop:'2px',
        paddingLeft: '5px',
        paddingRight: '5px',

    },
    temperatureMinText: {
        // textAlign: 'center',
        fontSize: '25px',
        backgroundColor: 'blue',
        color: 'white',
        borderBottomRightRadius: 10,
        paddingTop:'2px',
        paddingLeft: '5px',
        paddingRight: '5px',
    },
    wind: {
        flex: 1,
        flexDirection: "row",
        width: '60%',
        justifyContent: "space-between",
    },
    windText: {
        fontSize: '25px',
    },
    windLogo: {
        width: 30,
        height: 30,
    }
});