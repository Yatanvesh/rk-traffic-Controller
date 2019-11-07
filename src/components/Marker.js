import React from 'react';
import {FaCarSide, FaTruck, FaBus, FaMotorcycle} from 'react-icons/fa';
// import {IoIosCar} from 'react-icons/io'
import {IconContext} from "react-icons";
import {lightPink} from "../constants";

const types = {
    car:<FaCarSide/>,
    truck: <FaTruck/>,
    bus: <FaBus/>,
    bike: <FaMotorcycle/>
};

const marker = ({text,type='bike'}) => {

    return (
        <IconContext.Provider value={{size: '2em', color: lightPink, className: "global-class-name"}}>
            {text}
            {types[type]}
        </IconContext.Provider>
    )
};

export default marker;