import {EXTENDED_WEATHER, API_KEY} from './../constants/weatherApi';

const  EXTENDED_WEATHER_CITY_URL = city =>{
    return `${EXTENDED_WEATHER}?q=${city}&appid=${API_KEY}`;
}

export default EXTENDED_WEATHER_CITY_URL;