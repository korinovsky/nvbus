import React, { Component } from 'react';
import stops from './data/stops'
import Stop from "./Stop";


class Stops extends Component {
    _stops = [];

    constructor() {
        super();
        let id = 1;
        for (let name in stops) {
            if (stops.hasOwnProperty(name)) {
                this._stops.push(<Stop key={"stop" + id++} name={name} />);
            }
        }
    }

    render() {
        return <div className="points list-group">
            {this._stops}
        </div>
    }
}

export default Stops;


