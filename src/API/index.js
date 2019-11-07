import io from 'socket.io-client';

const url = 'http://rkserver.herokuapp.com';
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
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            

        });
    }catch(eror){
        console.log("Eror in signal", eror);
    }
}

export default socket;
