import React,{Component} from 'react';
import './App.css';

import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength'
import Session from './components/Session'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength:5,
      sessionlength:25,
      minutes: 25
      
    };
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onSessionIncre = this.onSessionIncre.bind(this);
    this.onSessionDecre = this.onSessionDecre.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.toggleInterval = this.toggleInterval.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onDecrement(){
    let prevState = this.state.breakLength;
    if(prevState === 1){     
      this.setState({
        breakLength: 1
      });
    } else {
    this.setState({
        breakLength: prevState - 1
    }); 
    }
  }

  onIncrement(){
    let prevState = this.state.breakLength;
    if(prevState === 60){     
      this.setState({
        breakLength: 60
      });
    } else {
    this.setState({
        breakLength: prevState + 1
    }); 
    }
  }

  onSessionDecre(){
    let prevState = this.state.sessionlength;
    let prevMinutes = this.state.minutes;
    if(prevState === 1){     
      this.setState({
        sessionlength: 1
      });
    } else {
    this.setState({
        sessionlength: prevState - 1,
        minutes: prevMinutes - 1
    }); 
    }
  }

  onSessionIncre(){
    let prevState = this.state.sessionlength;
    let prevMinutes = this.state.minutes;
    if(prevState === 1){     
      this.setState({
        sessionlength: 1
      });
    } else {
    this.setState({
        sessionlength: prevState + 1,
        minutes: prevMinutes + 1
    }); 
    }
  }

  updateTimer(){
    let prevMin = this.state.minutes;

    this.setState({
      minutes: prevMin - 1
    });
  }

  toggleInterval(isSession){
    if(isSession){
      this.setState({
        minutes: this.state.sessionlength
      });
    } else {
      this.setState({
        minutes: this.state.breakLength
      });
    }
  }
  
  onReset(){
    this.setState({
      minutes: this.state.sessionlength,
      isSession:true
    });
  }

  render() {
    return (
      <div className="contenedor">
        <div className="idControl">
        <BreakLength  breakInterval={this.state.breakLength} decrement={this.onDecrement} increment={this.onIncrement}/>
        <SessionLength  sessionInterval={this.state.sessionlength} incrementSession={this.onSessionIncre} decrementSession={this.onSessionDecre} />
        </div>
        <Session  timer={this.state.minutes} breakTimer={this.state.breakLength} timerMinute={this.updateTimer} 
           onToggle={this.toggleInterval} reset={this.onReset}/>
      </div>
    );
  }
}


export default App;
