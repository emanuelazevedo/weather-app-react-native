import axios from 'axios'
import {API_KEY} from "@env";

export const openweatherAPI = city => {
    if(city.city_name) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.city_name}&appid=${API_KEY}&units=metric`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.error(err)
            })
    } else {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.error(err)
            })
    }
}