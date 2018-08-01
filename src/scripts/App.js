import React, { Component } from 'react';
//import logo from './logo.svg';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <h1>Statistics Calculator</h1>
        </header>
        <nav class="navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#dist">Standard Distributions</a></li>
                <li><a href="#tstat">Other Distributions</a></li>
                <li><a href="#correl">Correlations</a></li>
                <li><a href="#anova">ANOVA Table</a></li>
                <li><a href="#disttable">Distribution Tables</a></li>
                <li><a>Calculators</a></li>
            </ul>
        </nav>
        <div class="mainPage"></div>
      </div>
    );
  }
}

export default App;
