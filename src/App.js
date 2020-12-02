import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Index from './pages/Index';
import Chef from './pages/Chef';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/chef" component={Chef} />
            <Route path="/contact" component={Contact} />
            <Route path="/menu" component={Menu} />
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
