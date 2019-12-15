import React, {Component} from 'react';
import './App.css';


import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import {Grid, Row, Col} from 'react-flexbox-grid';

import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

//import { WSAEINVALIDPROCTABLE } from 'constants';



const cities=[
  'Zapopan,mx',
  'Mazatlan,mx',
  'Mexico,mex',
  'London,uk',
  'Lima,pe',
];





class App extends Component {


  
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
            <LocationListContainer 
              cities={cities}               
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}> 
              <div className="details">
                {
                  <ForecastExtendedContainer/> 
                }
                
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