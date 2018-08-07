import React, { Component } from 'react';

class Dist extends Component {
    render() {
        return (
            <div className="mainPage">
                <div className="info">
                    <h1>Standard Statistical Distributions</h1>
                </div>
                <div className="calc">
                    <div id="display"></div>
                </div>
            </div>
        );
    }
}

export default Dist;
