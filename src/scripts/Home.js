import React, { Component } from 'react';
import '../stylesheets/Home.css'

class GStatCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mean: '',
            min: '',
            q1: '',
            median: '',
            q3: '',
            max: '',
            iqr: '',
            variance: '',
            stddev: '',
            svariance: '',
            samplestddev: '',
            inputData: ''
         }
         this.updateData = this.updateData.bind(this);
    }
    updateData(event) {
        this.setState({inputData: event.target.value}, () => {
            console.log(this.state.inputData);
        });
    }
    updateTable() {
    }
    render() {
        return (
            <div className="calc">
                <h1 align="center">General Statistics Calculator</h1>
                <form>
                    <br />
                    <textarea placeholder="Enter Data: (e.g 1,2,3,4)" onChange={this.updateData}></textarea>
                    <br /><br />
                </form>
                <br /><br />
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Statistic</th>
                                <th>Value</th>
                            </tr>
                            <tr>
                                <td>Mean</td>
                                <td>{this.state.mean}</td>
                            </tr>
                        </thead>
                        <tbody>
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
                            <tr>
                                <td>Variance</td>
                                <td>{this.state.variance}</td>
                            </tr>
                            <tr>
                                <td>Standard Deviation</td>
                                <td>{this.state.stddev}</td>
                            </tr>
                            <tr>
                                <td>Sample Variance</td>
                                <td>{this.state.svariance}</td>
                            </tr>
                            <tr>
                                <td>Sample Standard Deviation</td>
                                <td>{this.state.samplestddev}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="display"></div>
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div className="mainPage">
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
