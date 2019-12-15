import {WEATHER_URL, API_KEY} from './../constants/weatherApi';

const  CITY_URL = city =>{
    return `${WEATHER_URL}?q=${city}&appid=${API_KEY}`;
}

export default CITY_URL;