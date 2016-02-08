import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import App from './App';
import 'file?name=[name].[ext]!../index.html'

ReactDOM.render(
    <Router>
        <Route path="/" component={App}/>
        <Route path="/:filter" component={App}/>
    </Router>
    //<App />
    , document.getElementById('root'));
