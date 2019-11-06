import io from 'socket.io-client';

const url='http://localhost:3001';
//const url = 'http://d2e73afd.ngrok.io';
var socket = io.connect(url);

socket.on('LOCATION', function (data) {
    console.log("Received",data);
    socket.emit('my other event', { my: 'data' });
});

export default socket;