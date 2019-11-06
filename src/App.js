import React from 'react';
import './App.css';
import socket from './API';

import Map from './components/Map';
// socket.emit('LOCATION', "hello dan");

const coords = {
  lat:13.128535,
  lng:77.589421
}

const temple= {
  lat: 13.129622,
  lng: 77.588166
}

const pg = {
  lat:13.130281, 
  lng:77.585164
}

const road = {
  lat:13.131906, 
  lng:77.589284
}

class App extends React.Component {

  state={
    center: {
      lat: coords.lat,
      lng: coords.lng
    },
    zoom: 16,
    clients:{
      temple,
      road,
      pg
    }
  }

  render(){
    return (
      <div className="App">
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
