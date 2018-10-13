import React, { Component } from 'react';
import stops from './data/stops';
import Arrival from './Arrival';

class Stop extends Component {
    _name;
    _stop;

    constructor(props) {
        super(props);
        this.state = Stop._getNowState();
        this._name = props.name;
        this._stop = stops[this._name];
    }

    render() {
        // console.log(this.state);

        let arrivals =[],
            now = new Date(),
            nowTime = now.getHours() * 3600 + now.getMinutes() * 60 - Stop.secondsToShow,
            dayOfWeek = now.getDay(),
            checkDate = function (date) {
                return parseInt(date, 2) & [1, 64, 32, 16, 8, 4, 2][dayOfWeek];
            },
            refreshState = function () {
                this.setState(Stop._getNowState())
            };

        if (now.getHours() < 4) {
            now.setDate(now.getDate() - 1);
        }


        for (let date in this._stop) {
            if (this._stop.hasOwnProperty(date) && checkDate(date)) {
                let future = false;
                for (let i in this._stop[date]) {
                    if (this._stop[date].hasOwnProperty(i)) {
                        let time = this._stop[date][i].time;
                        future = future || time >= nowTime;
                        if (!future) {
                            continue;
                        }
                        arrivals.push({
                            time: time,
                            way: this._stop[date][i].way
                        });
                    }
                }
                break;
            }
        }
        console.log(arrivals);

        setTimeout(refreshState.bind(this), 60001 - now.getMilliseconds() - now.getSeconds() * 1000);

        return <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this._name}</h5>
            </div>
            <p className="mb-1">{arrivals.slice(0, Stop.numberOfArrivals).map(Stop.renderArrival)}</p>
        </a>
    }

    static numberOfArrivals = 10;
    static secondsToShow = 60;

    static _getNowState() {
        let now = new Date();
        return {now : now.getTime() - now.getSeconds() * 1000 - now.getMilliseconds()};
    }

    static renderArrival(time) {
        return <Arrival key={"" + time.time + time.way} time={time.time} way={time.way} />
    }

}

export default Stop;
