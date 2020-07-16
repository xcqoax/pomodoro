import React, { Component } from 'react';

class Session extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isSession: true,
            timerSecond: 0,
            interval: 0
        };

        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.refresh = this.refresh.bind(this);
        this.decrementSecond = this.decrementSecond.bind(this);
    }

        play(){
            let interval = setInterval( this.decrementSecond, 1000);

            this.setState({
                interval: interval
            });
        }

        decrementSecond(){
            let prevStateSecond = this.state.timerSecond;

            switch(this.state.timerSecond){
                case 0:
                    if(this.props.timer === 0){
                        if(this.state.isSession){
                            this.setState({
                                isSession:false
                            });
                            this.props.onToggle(this.state.isSession)
                        }else{
                            this.setState({
                                isSession: true
                            });
                            this.props.onToggle(this.state.isSession)
                        }
                    }
                        
                    

                this.props.timerMinute()
                    this.setState({
                        timerSecond: 59
                    });
                    break;
                default:
                    this.setState({
                            timerSecond : prevStateSecond - 1
                        
                    });

            }
        }

        stop(){
            clearInterval(this.state.interval)
        }

        refresh(){
            this.stop();
            

            this.setState({
                isSession:true
            });

            this.setState({
                timerSecond: 0
            });
        }
    
    render() {
        return (
            <div class="centrado">
                <section className="mb-10">
                    <h4 className="fs-20">{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span className="fs-20">{this.props.timer}</span>
                    <span className="fs-20">:</span>
                    <span className="fs-20">{
                        this.state.timerSecond === 0
                        ? "00"
                        :this.state.timerSecond < 10
                        ?"0"+ this.state.timerSecond
                        :this.state.timerSecond
                        }</span>
                </section>
                <section >
                    <button className="btn" onClick={this.play}>Play</button>
                    <button className="btn" onClick={this.stop}>Stop</button>
                    <button className="btn" onClick={this.refresh}>Refresh</button>
                </section>
            </div>
        );
    }
}

export default Session;