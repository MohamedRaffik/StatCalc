import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './scripts/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter basename={window.location.url}>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
