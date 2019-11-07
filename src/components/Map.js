import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
import key from '../apikey';
import Marker from './Marker';

const map = (props) => {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'' }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          { Object.keys(props.clients).map( id => {
            const client  = props.clients[id];
            return (
              <Marker
                key={id}
                lat={client.lat}
                lng={client.lng}
                text={id}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    );
}
 
export default map;