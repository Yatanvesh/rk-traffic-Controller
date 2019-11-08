import React from 'react';

import './App.css';
<<<<<<< HEAD
import {getLocationData, sendSignal} from './API';
=======
import {getLocationData, getMultiLocationData} from './API';
>>>>>>> 94e7a84eb4712943dca56552d0468f96bf618fa4
import Map from './components/Map';
import Button from './components/Options';
import Chart from './components/chart';
import {centerCoords} from './constants';

class App extends React.Component {

  state={
    center: {
      lat: centerCoords.lat,
      lng: centerCoords.lng
    },
    zoom: 16,
    clients:{},
    signals:{}
  };

  componentDidMount() {
    getLocationData(this.onDataReceive);
    getMultiLocationData(this.onMultiDataReceive);
  }

  onDataReceive= (data) => {
    let {clients} = this.state;
    let {id,coords,type} = data;
    if(id){
      clients[id] = {
        coords,
        type
      }
    }
    this.setState({clients});
  };

  onMultiDataReceive = (data) => {
    // console.log("Got ", data);
    const {vehicles} = data;
    if(!vehicles){
      console.log("No vehicles");
      return;
    }
    const {clients} = this.state; 
    vehicles.map(vehicle => {
        if(vehicle.id){
          clients[vehicle.id] = {
            coords:{
              lat:vehicle.lat,
              lng:vehicle.lng
            },
            type:'car'
          }
        }
    })
    this.setState({clients});
  }

  render(){
    return (
      <div className="App">
        <h1 className={'Heading'}>TRAFFIC CONTROLLER</h1>
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          clients={this.state.clients}
        />
        <Button 
          cb={sendSignal}
        />
        <Chart 
          light={'grgfygyrrG'}
        />
        
      </div>
    );
  }
}

export default App;
