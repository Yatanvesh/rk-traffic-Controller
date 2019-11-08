import React from 'react';
import './Options.css'

class Options extends React.Component{
    render(){
        const {cb} = this.props;
        return(
            <div>
                <button onClick={()=>cb('start')} className={'green'}>Start</button>
                <button onClick={()=>cb('reset')} className={'red'}>Reset</button>
                <button onClick={()=>cb('pause')} className={'blue'}>Pause</button>  
                <button onClick={()=>cb('fetch')} className={'something'}>Fetch</button>          
            </div>
        );
    }
}
export default Options;

