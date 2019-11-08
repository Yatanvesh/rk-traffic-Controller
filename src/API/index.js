import io from 'socket.io-client';

// const url = 'http://rkserver.herokuapp.com';
const url = 'http://localhost:3002';
//const url = 'http://d2e73afd.ngrok.io';
let socket = io.connect(url);

export const getLocationData = cb => {
    socket.on('LOCATION', function(data) {
        console.log('Received', data);
        // socket.emit('my other event', { my: 'data' });
        cb(data);
    });
};

export const sendSignal = async (signal='Start') =>{
    try{
        
        socket.emit('CONTROL',signal);
    }catch(eror){
        console.log("Eror in signal", eror);
    }
}

export default socket;
