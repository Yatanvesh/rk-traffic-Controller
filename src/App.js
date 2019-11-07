import React from 'react';

import './App.css';
import {getLocationData} from './API';
import Map from './components/Map';

const centerCoords = {
  lat:13.128535,
  lng:77.589421
};

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
      </div>
    );
  }
}

export default App;
