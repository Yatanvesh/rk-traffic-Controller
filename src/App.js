import React from 'react';

import './App.css';
import {getLocationData, sendSignal} from './API';
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
