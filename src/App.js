import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Index from './pages/Index';
import QuienesSomos from './pages/QuienesSomos';
import Capacitaciones from './pages/Capacitaciones';
import Supervisiones from './pages/Supervisiones';
import Menu from './pages/Menu';
import Materiales from './pages/Materiales';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/quienes-somos" component={QuienesSomos} />
            <Route path="/capacitaciones" component={Capacitaciones} />
            <Route path="/supervisiones" component={Supervisiones} />
            <Route path="/materiales" component={Materiales} />
            <Route path="/menu" component={Menu} />
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
