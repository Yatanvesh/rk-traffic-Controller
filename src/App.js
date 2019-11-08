import React from 'react';

import './App.css';

import {getClientLocationData,getSignalData ,sendSignal,getMultiLocationData} from './API';

import Map from './components/Map';
import Button from './components/Options';
import Chart from './components/Chart';
import {centerCoords} from './constants';

class App extends React.Component {

  state={
    center: {
      lat: centerCoords.lat,
      lng: centerCoords.lng
    },
    zoom: 16,
    clients:{},
    trafficSignals:{}
  };

  componentDidMount() {
    getClientLocationData(this.onDataReceive);
    getMultiLocationData(this.onMultiDataReceive);
    getSignalData(this.ongetSignalData);
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
    });
    
    this.setState({clients});
  }

  ongetSignalData=(data)=>{
    const {signals} = data;
    if(!signals){
      console.log("No Signals");
      return;
    }
    const {trafficSignals} = this.state; 
    signals.map(signal => {
        if(signal.id){
          trafficSignals[signal.id] = {
            coords:{
              lat:signal.lat,
              lng:signal.lng
            },
            state:signal.state
          }
        }
    });
    
    this.setState({trafficSignals});

  }


  render(){
    return (
      <div className="App">
        <h1 className={'Heading'}>TRAFFIC CONTROLLER</h1>
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          clients={this.state.clients}
          signals={this.state.trafficSignals}
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
