import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
import key from '../apikey';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class CustomMap extends Component {
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={temple.lat}
            lng={temple.lng}
            text="Temple"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default CustomMap;