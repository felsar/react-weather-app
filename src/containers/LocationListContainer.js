import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //conectar react y redux.Proveer el component con cara

import LocationList from './../components/LocationList'; 
import {setCity} from './../actions';

class LocationListContainer extends Component {
    handleSelectedLocation = (city) =>{ 
        this.props.setCity(city);
      };

    render() {
        return (
            <div>
                <LocationList 
                    cities={this.props.cities} 
                    onSelectedLocation ={this.handleSelectedLocation}
                />
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired, 
};

const mapDispatchToPropsActions = (dispatch) =>({
    setCity: payload =>dispatch(setCity(payload))
  });
  
  export default connect(
    null,
    mapDispatchToPropsActions
  )(LocationListContainer);
//export default LocationListContainer;