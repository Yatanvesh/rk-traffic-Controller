import io from 'socket.io-client';

// const url = 'http://rkserver.herokuapp.com';
const url = 'http://localhost:3002';
//const url = 'http://d2e73afd.ngrok.io';
let socket = io.connect(url);

export const getLocationData = cb => {
    socket.on('LOCATION', function(data) {
        console.log('Received', data);
        cb(data);
    });
};

export const getMultiLocationData = cb => {
    socket.on('LOCATIONS', function(data) {
        console.log('Received', data);
        cb(data);
    });
};

export default socket;
