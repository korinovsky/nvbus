import React, { Component } from 'react';
import './css/app.css';
import Stops from './Stops';

class App extends Component {
    render() {
        return <div className="app">
            <header>
                <div className="container">
                    <h1>Новые Ватутинки</h1>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Stops />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App;
