import React from 'react';
import './Options.css'

class Options extends React.Component{
    render(){
        const {cb} = this.props;
        return(
            <div>
                <button onClick={()=>cb('Start')} className={'green'}>Start</button>
                <button onClick={()=>cb('Reset')} className={'red'}>Reset</button>
                <button onClick={()=>cb('Pause')} className={'blue'}>Pause</button>  
                <button onClick={()=>cb('Something')} className={'something'}>Something</button>          
            </div>
        );
    }
}
export default Options;

