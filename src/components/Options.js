import React from 'react';

class Options extends React.Component{
    render(){
        return(
            <div>
                <button onClick="Start">Start</button>
                <button onClick="reset">Reset</button>
                <button >Pause</button>  
                <button>Something</button>          
            </div>
        );
    }
}
export default Options;

