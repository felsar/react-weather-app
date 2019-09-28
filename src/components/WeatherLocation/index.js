import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types'
import Location from'./Location';
import WeatherData from './WeatherData';
import './WeatherData/styles.css';
import transformWeather from './../../services/transformWeather';
import CITY_URL from './../../services//getWeatherUrlByCity';
import {CLOUD, 
    /*CLOUDY, SUN, RAIN, SNOW, WINDY*/
} from './../../constants/constants';



const CITIES =["Guadalajara", "Mazatlan"];

class WeatherLocation extends Component{

    constructor(props){
        console.log("constructor");
        super(props);
        const {city} = props;

        this.state={
            flag:1,
            city: city,
            data: null,
            
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    

    handleUpdateClick= (city) =>{
        console.log("handleUpdateClick");

        const API_WEATHER = CITY_URL(this.state.city);

        fetch(API_WEATHER)
        .then(
            resolve=>{
                return resolve.json();
            }
        ).then(
            data =>{
                const newWeather = transformWeather(data);
                this.setState({
                    data: newWeather,
                })
                console.log(data)
            }
        );
    }
    //this.handleUpdateClick = this.handleUpdateClick.bind(this);
    render(){
        const {onWeatherLocationClick} = this.props;
        console.log("render");
        const {city, data} = this.state
        return(
        <div className="weatherLocationContainer" onClick={onWeatherLocationClick}>
            <Location city={city} />
            {data? 
                <WeatherData data={data} />: 
                <CircularProgress size={50}/>
            }
            <button className="react" onClick={this.handleUpdateClick}>{CITIES[this.state.flag]}</button>
        </div>
        );
    }

    
}

WeatherLocation.propTypes= {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick : PropTypes.func,
}

export default WeatherLocation;