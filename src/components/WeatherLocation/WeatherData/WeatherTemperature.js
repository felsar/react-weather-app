import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';


import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constants/constants';

const icons={
    [CLOUD]: "cloud",
    [CLOUDY]:"cloudy",
    [SUN]: "day-sunny",
    [RAIN]:  "rain",
    [SNOW]:  "snow",
    [WINDY]: "windy"
}

const getWeatherIcon = (weatherState) =>{
    const sizeIcon = "4x";
    const icon = icons[weatherState];
        return <WeatherIcons className="wicon" name={icon || SUN} size={sizeIcon}/>
      
}

const WeatherTemperature = ({temperature, weatherState}) => (
<div className="weatherTemperature">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">°C</span>
</div>
);

WeatherTemperature.propTypes ={
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;