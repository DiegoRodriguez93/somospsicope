import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';

import Header from './components/Header';
import Index from './pages/Index';
import Chef from './pages/Chef';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

import LanguageSwitcher from './components/LanguageSwitcher'


/* import Footer from './components/Footer'; */


function App() {
  return (
    <Router>
    <div className="App">
    <LanguageSwitcher/>
      <Header/>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/chef" component={Chef} />
            <Route path="/contact" component={Contact} />
            <Route path="/menu" component={Menu} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
