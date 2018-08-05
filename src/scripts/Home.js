import React, { Component } from 'react';
import jStat from 'jStat';
import '../stylesheets/Home.css'

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
            displayWork: false
         }
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
                iqr: stat.quartiles()["2"] - stat.quartiles()["0"],
            });
        });
    }
    showGraph() {
        this.setState({displayChart: !this.state.displayChart});
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
                    <div></div>
                </div>
                <hr></hr>
                <div className="work">
                    <a onClick={this.showWork}>+ Show Work</a>
                    <div></div>
                </div>
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="info">
                    <h1>What is Statistics?</h1>
                    <hr />
                    <p>Statistics is a branch of mathematics dealing with the collection, analysis, interpretation, presentation, and organization of data. In applying statistics to, for example, a scientific, industrial, or social problem, it is conventional to begin with a statistical population or a statistical model process to be studied. Populations can be diverse topics such as "all people living in a country" or "every atom composing a crystal". Statistics deals with all aspects of data including the planning of data collection in terms of the design of surveys and experiments. <br /><br />When census data cannot be collected, statisticians collect data by developing specific experiment designs and survey samples. Representative sampling assures that inferences and conclusions can reasonably extend from the sample to the population as a whole. An experimental study involves taking measurements of the system under study, manipulating the system, and then taking additional measurements using the same procedure to determine if the manipulation has modified the values of the measurements. In contrast, an observational study does not involve experimental manipulation. <br /><br />Two main statistical methods are used in data analysis: descriptive statistics, which summarize data from a sample using indexes such as the mean or standard deviation, and inferential statistics, which draw conclusions from data that are subject to random variation (e.g., observational errors, sampling variation). Descriptive statistics are most often concerned with two sets of properties of a distribution (sample or population): central tendency (or location) seeks to characterize the distribution's central or typical value, while dispersion (or variability) characterizes the extent to which members of the distribution depart from its center and each other. Inferences on mathematical statistics are made under the framework of probability theory, which deals with the analysis of random phenomena.
                    </p>
                    <hr />
                </div>
                <GStatCalculator />
            </div>
        )
    }
}

export default Home;

export {
    GStatCalculator
}
