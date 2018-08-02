import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from "./Home"
import '../stylesheets/App.css';

class App extends Component {
    render() {
        const home = () => (<Home />);

        return (
            <div className="App">
            <header>
                <h1>Statistics Calculator</h1>
            </header>
                <nav class="navigation">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/dist">Standard Distributions</Link></li>
                        <li><Link to="/tstat">Other Distributions</Link></li>
                        <li><Link to="/correl">Correlations</Link></li>
                        <li><Link to="/anova">ANOVA Table</Link></li>
                        <li><Link to="/disttable">Distribution Tables</Link></li>
                    </ul>
                </nav>

                <Route exact path="/" component={home} />
                <Route path="/home" component={home} />

            </div>
        );
    }
}

export default App;
