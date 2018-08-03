import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from "./Home";
import Dist from "./Dist";
import '../stylesheets/App.css';

class App extends Component {
    render() {
        return (
            <div>
            <header><Link to="/">Statistics Calculator</Link></header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dist">Standard Distributions</Link></li>
                        <li><Link to="/tstat">Other Distributions</Link></li>
                        <li><Link to="/correl">Correlations</Link></li>
                        <li><Link to="/anova">ANOVA Table</Link></li>
                        <li><Link to="/disttable">Distribution Tables</Link></li>
                    </ul>
                </nav>

                <Route exact path="/" component={Home} />
                <Route path="/dist" component={Dist} />

            </div>
        );
    }
}

export default App;
