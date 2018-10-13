import React, { Component } from 'react';

class Arrival extends Component {

    constructor(props) {
        super(props);
        this.state = {
            way: props.way,
            time: props.time,
            next: props.next || false
        };
    }

    render() {
        function getTimeFormatted(time) {
            let hours = Math.floor(time / 3600);
            let minutes = (time - hours * 3600) / 60;
            return hours + ":" + (minutes < 10 ? "0" : "") + minutes;
        }

        return <span className='time'>{getTimeFormatted(this.state.time)}<span>{this.state.way}</span></span>;
    }

}

export default Arrival;
