import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import {Grid, Row, Col} from 'react-flexbox-grid';

const cities=[
  'Zapopan',
  'Mazatlan',
  'Mexico,mex',
  'Berlin',
  'Lima,pe',
];

class App extends Component {
  constructor(){
    super();

    this.state={
      city: 'null'
    }
  }

  handleSelectedLocation = (city) =>{
    this.setState(
      {city: city,}
    )
  };
  
  render(){
    return (

      <Grid fluid>
        <Row start="xs">
          <AppBar position='sticky' >
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation ={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}> 
              <div className="details">
                <ForecastExtended city ={this.state.city}/>
              </div>
            </Paper>
            
          </Col>
        </Row>
      </Grid>

      /*<div className="App">
        
      </div>*/
    );
    }
}

export default App;
