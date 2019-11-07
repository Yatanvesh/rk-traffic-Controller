import React from 'react';
import {FaCarSide, FaTruck, FaBus, FaMotorcycle,FaTrafficLight} from 'react-icons/fa';
// import {IoIosCar} from 'react-icons/io'
import {IconContext} from "react-icons";
import {boldBlue, lettuce, lightPink, green,amber,red} from "../constants";
import {greatPlaceStyle, greatPlaceStyleHover} from './hoverStyles';

const markerTypes = {
    car: <FaCarSide/>,
    truck: <FaTruck/>,
    bus: <FaBus/>,
    bike: <FaMotorcycle/>,
    trafficLightGreen: <FaTrafficLight/>,
    trafficLightRed:<FaTrafficLight/>,
    trafficLightAmber:<FaTrafficLight/>
};

const colorTypes = {
    car: lightPink,
    truck: boldBlue,
    bus: boldBlue,
    bike: lettuce,
    trafficLightGreen:green,
    trafficLightRed:red,
    trafficLightAmber:amber
};

const marker = (props) => {
    const {text, type = 'bike', $hover} = props;
    const style = $hover ? greatPlaceStyleHover : greatPlaceStyle;
    const color = colorTypes[type];
    return (
        <div style={style}>
            <IconContext.Provider value={{size: '2em', color, className: "global-class-name"}}>
                {text}
                {markerTypes[type]}
            </IconContext.Provider>
        </div>
    )
};

export default marker;