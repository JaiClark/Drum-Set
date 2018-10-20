import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import './App.css';

const App =() =>  (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Shop' component={Shop} />
      </div>
    </Router>
)

export default App;
