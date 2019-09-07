import React from 'react';
import Location from'./Location';
import WeatherData from './WeatherData';
import './WeatherData/styles.css';

import {CLOUD, SUN,
    /*CLOUDY,  RAIN, SNOW, WINDY*/
} from './../../constants/constants';

const data={
    temperature:15,
    weatherState:CLOUD,
    humidity:10,
    wind: '10 m/s',
}

const data2={
    temperature:25,
    weatherState:SUN,
    humidity:90,
    wind: '50 m/s',
}

class WeatherLocation extends React.Component{

    constructor(){
        super();
        this.state={
            city: "Zapopan",
            data: data,
            flag: 0,
        };
    }

    handleUpdateClick= () =>{
        this.setState({
            flag:!this.state.flag,
            //city: "Mazatlan",
            data: (this.state.flag? data : data2),
        })
    }
    //this.handleUpdateClick = this.handleUpdateClick.bind(this);

    render(){
        const {city, data} = this.state
        return(
        <div className="weatherLocationContainer">
            <Location city={city} />
            <WeatherData data={data} />
            <button className="react" onClick={this.handleUpdateClick}>Update</button>
        </div>
        );
    }
};

export default WeatherLocation;