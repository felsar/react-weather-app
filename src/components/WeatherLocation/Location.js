import React from 'react';
import PropTypes from 'prop-types';
import './WeatherData/styles.css';

const Location = (props) =>{
    //const city= props.city;
    //Destructuring
    const { city } = props;

    return(
        <div className="locationContainer">
            <h1>{city}</h1>
        </div>
);
};

Location.propTypes ={
    city: PropTypes.string.isRequired,
};

export default Location;