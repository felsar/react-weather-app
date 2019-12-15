import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
    <div className="weatherExtraInfo">
        <span className="extraInfoText">{`Humidity: ${humidity} %` }</span>
        <span className="extraInfoText">{`Wind: ${wind}`}</span>
    </div>
    );
};

WeatherExtraInfo.propTypes={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;