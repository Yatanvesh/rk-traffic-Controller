import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
import key from '../apikey';
import Marker from './Marker';
import Chart from './Chart';
import rakuten from '../assets/rakuten.png';

import {centerCoords} from '../constants'; 

const createMapOptions =   (maps)  => {
    return {
        panControl: false,
        mapTypeControl: false,
        // styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
};

const Rakuten = () => (
  <img src={rakuten} lat={centerCoords.lat} lng={centerCoords.lng} width="40" />
)

const map = (props) => {
  const rotationStyle = {  transform: `rotate(0deg)`,    }

    return (
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          hoverDistance={30}
        >
          { Object.keys(props.clients).map( id => {
            const client  = props.clients[id];
            
            let {coords,type,angle} = client;
            return (
              <Marker
                key={id}
                lat={coords.lat}
                lng={coords.lng}
                text={id}
                type={type}
                angle={angle}
              />
            )
          })}
          {
            Object.keys(props.signals).map( id => {
              const signal  = props.signals[id];
              let {coords,state} = signal;
              return (
                <div style={rotationStyle}
                lat={coords.lat}
                  lng={coords.lng}>
                
                <Chart
                  key={id}
                  
                  light={state}
                />
                </div>
              )
            })
          }
          {Rakuten()}

        </GoogleMapReact>
      
    );
}
 
export default map;