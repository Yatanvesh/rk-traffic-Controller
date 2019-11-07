import React from 'react';

import './App.css';
import {getLocationData, getMultiLocationData} from './API';
import Map from './components/Map';

import {centerCoords} from './constants';

class App extends React.Component {

  state={
    center: {
      lat: centerCoords.lat,
      lng: centerCoords.lng
    },
    zoom: 16,
    clients:{}
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
      </div>
    );
  }
}

export default App;
