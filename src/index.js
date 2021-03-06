import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'react-vis/dist/style.css';
import 'react-input-range/lib/css/index.css'
import './css/main.css';
import "./web.config";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// console.log('Your process.env.PUBLIC_URL', process.env.PUBLIC_URL) 
// ReactDOM.render(<BrowserRouter> <App /></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
    // </Router>basename={process.env.PUBLIC_URL} >
registerServiceWorker();
