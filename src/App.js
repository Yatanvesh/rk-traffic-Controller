import React from 'react';
import './App.css';
import socket, {getLocationData} from './API';

import Map from './components/Map';
// socket.emit('LOCATION', "hello dan");

const centerCoords = {
  lat:13.128535,
  lng:77.589421
}

class App extends React.Component {

  state={
    center: {
      lat: centerCoords.lat,
      lng: centerCoords.lng
    },
    zoom: 16,
    clients:{

    }
  };

  componentDidMount() {
    getLocationData(this.onDataReceive);
  }

  onDataReceive= (data) => {
    // let
    let {clients} = this.state;
    let {id,lat,lng} = data;
    if(id){
      clients[id] = {
        lat,
        lng
      }
    }
    this.setState({clients});
  };

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
