import React, { Component } from 'react';
import jStat from 'jStat';
import Plot from 'react-plotly.js';
import '../../stylesheets/Home.css';

class GStatCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: '',
            mean: '',
            min: '',
            q1: '',
            median: '',
            q3: '',
            max: '',
            iqr: '',
            inputData: '',
            displayChart: false,
            displayWork: false,
            freqData: [],
            plotData: []
        };
         this.graphLayout = {
             title: "Frequency Graph",
             autosize: "true",
             xaxis: { "title": "Numbers", "type": "category", "fixedrange": true },
             yaxis: { "title": "Frequencies", "fixedrange": true },
         };
         this.boxLayout = {
             title: "Box Plot",
             autosize: "true",
             xaxis: { "fixedrange": true },
             yaxis: { "fixedrange": true }
         };
         this.updateData = this.updateData.bind(this);
         this.showGraph = this.showGraph.bind(this);
         this.showWork = this.showWork.bind(this);
    }
    updateData(event) {
        this.setState({inputData: event.target.value}, () => {
            var strSplit = this.state.inputData.split(',').filter((e) => e !== "");
            var vector = strSplit.map((v) => { return Number(v); });
            var stat = jStat(vector);
            this.setState({
                sum: stat.sum(),
                mean: stat.mean(),
                min: stat.min(),
                q1: stat.quartiles()["0"],
                median: stat.median(),
                q3: stat.quartiles()["2"],
                max: stat.max(),
                iqr: isNaN(stat.quartiles()["2"] - stat.quartiles()["0"]) ? '' : stat.quartiles()["2"] - stat.quartiles()["0"],
            });
            this.changeGraphData();
        });
    }
    changeGraphData(callback) {
        let strSplit = this.state.inputData.split(',').filter((v) => v !== "");
        let xVal = strSplit.filter((v, i, a) => i === a.indexOf(v));
        let yVal = xVal.map((v) => {
            let count = 0;
            for (let i = 0; i < strSplit.length; i++) { count = (v === strSplit[i]) ? count + 1 : count; }
            return count;
        });
        let graphData = [{ x: xVal, y: yVal, type: "bar" }];
        let boxData = [{ x: strSplit, name: 'Set', type: "box", boxpoints: "Outliers" }];
        this.setState({freqData: graphData}, () => this.setState({plotData: boxData}, callback));
    }
    showGraph() {
        this.setState({displayChart: !this.state.displayChart}, () => {
            this.changeGraphData(() => document.querySelector(".graph > div").className = this.state.displayChart ? "defaultView shown" : "defaultView hide")
        });
    }
    showWork() {
        this.setState({displayWork: !this.state.displayWork});
    }
    render() {
        return (
            <div className="calc">
                <h1>General Statistics Calculator</h1>
                <form>
                    <br />
                    <textarea placeholder="Enter Data: (e.g 1,2,3,4)" onChange={this.updateData}></textarea>
                    <br /><br />
                </form>
                <br /><br />
                <table>
                    <thead>
                        <tr>
                            <th>Statistic</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mean</td>
                            <td>{this.state.mean}</td>
                        </tr>
                        <tr>
                            <td>Sum</td>
                            <td>{this.state.sum}</td>
                        </tr>
                        <tr>
                            <td>Minimum</td>
                            <td>{this.state.min}</td>
                        </tr>
                        <tr>
                            <td>Quartile 1</td>
                            <td>{this.state.q1}</td>
                        </tr>
                        <tr>
                            <td>Median</td>
                            <td>{this.state.median}</td>
                        </tr>
                        <tr>
                            <td>Quartile 3</td>
                            <td>{this.state.q3}</td>
                        </tr>
                        <tr>
                            <td>Maximum</td>
                            <td>{this.state.max}</td>
                        </tr>
                        <tr>
                            <td>InterQuartile Range</td>
                            <td>{this.state.iqr}</td>
                        </tr>
                    </tbody>
                </table>
                <br></br><br></br>
                <div className="graph">
                    <a onClick={this.showGraph}>+ Show Frequency Graph / Box Plot</a>
                    <div className="defaultView">
                        <Plot divId="freq" useResizeHandler={true} layout={this.graphLayout} data={this.state.freqData}></Plot>
                        <Plot divId="box" useResizeHandler={true} layout={this.boxLayout} data={this.state.plotData}></Plot>
                    </div>
                </div>
                <hr></hr>
                <div className="work">
                    <a onClick={this.showWork}>+ Show Work</a>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}

export default GStatCalculator;
