import io from 'socket.io-client';

// const url = 'http://localhost:3002';
// const url = 'http://d2e73afd.ngrok.io';
const url='http://rkserver.herokuapp.com'
// const url = 'http://10.99.7.214:3002';
let socket = io.connect(url);
// let socket=io.connect(url);

export const getClientLocationData = cb => {
    socket.on('CLIENT_LOCATION', function(data) {
        console.log('Received CLIENT_LOCATION', data);
        cb(data);
    });
};

export const getMultiLocationData = cb => {
    socket.on('LOCATIONS', function(data) {
        // console.log('Received Vehicle LOCATIONS', data);
        cb(data);
    });
};

export const getSignalData = cb =>{
    socket.on('SIGNALS',function(data){
        // console.log('Received Signal LOCATIONS', data);
        cb(data);
    })
}

export const sendSignal = async (signal='start') =>{
    try{
        
        socket.emit('CONTROL',signal);
    }catch(eror){
        console.log("Eror in signal", eror);
    }
}

export default socket;
