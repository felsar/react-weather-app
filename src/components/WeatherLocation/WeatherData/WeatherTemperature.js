import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';


import {CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE} from './../../../constants/constants';

const icons={
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]:  "rain",
    [SNOW]:  "snow",
    [THUNDER]: "day-thunderstorme",
    [DRIZZLE]: "day-showers",
}

const getWeatherIcon = (weatherState) =>{
    const sizeIcon = "4x";
    const icon = icons[weatherState];
    //debugger;
        return <WeatherIcons className="wicon" name={icon || icons[SUN]} size={sizeIcon}/>
      
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