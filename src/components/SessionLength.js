import React from 'react';

function SessionLength(props) {

    function decrementSession(){
        props.decrementSession()
    }
    
    function incrementSession(){
  
        props.incrementSession()
    }
    
    return (
        <div className="centrado">
                <h3 className="fs-20">Session Length</h3>
                <button className="btn" onClick={decrementSession}> - </button>
                <span className="fs-20"> {props.sessionInterval} </span>
                <button className="btn" onClick={incrementSession}> + </button>
        </div>

    );
}

export default SessionLength;