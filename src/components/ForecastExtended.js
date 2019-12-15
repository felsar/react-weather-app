import React, {Component} from 'react'
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import EXTENDED_WEATHER_CITY_URL from './../services/getExtendedWeatherByCity';
import transformForecast from './../services/transformForecast';


class ForecastExtended extends Component{
    constructor(){
        super();
        this.state={
            forecastData:null,
        }
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    updateCity = (city) =>{
        console.log("Extended DidMount")
        const API_EXTENDED_WEATHER = EXTENDED_WEATHER_CITY_URL(city);
        console.log(API_EXTENDED_WEATHER)
        fetch(API_EXTENDED_WEATHER)
        .then(
            (data)=>{
                return data.json()
            }
        ).then(
            weather_data =>{
                console.log("Before");
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log("After");
                console.log(forecastData);
                this.setState({
                    forecastData: forecastData,
                })
                /*const newWeather = transformWeather(weather_data);
                this.setState({
                    data: newWeather,
                })*/
                
            }
        );
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !==this.props.city){
            this.updateCity(nextProps.city);
            this.setState({
                forecastData:null,
            })
        }
    }

    renderProgress(){
        return(
            <CircularProgress size={50} />
        );
    }



    renderForecastItemDays(forecastData){
        return( 
            forecastData.map( 
                forecast =>  
                (<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} 
                                weekDay={forecast.weekDay} 
                                hour={forecast.hour} 
                                data={forecast.data}/>)         
            )
            
        );
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div>
                <h2 className='forecastTitle'>Forecast Details: {city}</h2>
                {forecastData ? 
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;