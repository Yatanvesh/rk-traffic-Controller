import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
import key from '../apikey';
import Marker from './Marker';

const createMapOptions =   (maps)  => {
    return {
        panControl: false,
        mapTypeControl: false,
        // styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
};


const map = (props) => {
    return (
      <div className={'MapContainer'}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'' }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          hoverDistance={30}
        >
          { Object.keys(props.clients).map( id => {
            const client  = props.clients[id];
            let {coords,type} = client;
            return (
              <Marker
                key={id}
                lat={coords.lat}
                lng={coords.lng}
                text={id}
                type={type}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    );
}
 
export default map;