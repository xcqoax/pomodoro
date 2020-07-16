import React from 'react';




function BreakLength(props) {

function decrementBreak(){
    if(props.breaklength === 1){
        return;
    }
    props.decrement()

}

function incrementBreak(){
    if(props.breaklength === 60){
        return;
    }
    props.increment()
}
        
    

    return (
        <div className="centrado">
            <h3 className="fs-20">BreakLength</h3>
                <button className="btn" onClick={decrementBreak}> - </button>
                <span className="fs-20"> {props.breakInterval} </span>
                <button className="btn" onClick={incrementBreak}> + </button>
        </div>
    );
}


export default BreakLength;