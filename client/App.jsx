/**
 * @module App.jsx
 * @description Main app component for front end
 */

import React, { Component } from'react';
import Home from './components/Home.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

 class App extends Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (
             <Router>
                <div>
                    <Home />
                </div>
             </Router>
         )
     }
 }
 export default App;