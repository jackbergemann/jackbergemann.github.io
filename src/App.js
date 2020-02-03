import React from 'react';
import {  Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Portfolio from '../src/pages/Portfolio';
import './App.css';

function App() {
  return (
      <div className="App">
          <Header /> 
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
          <Footer />
    </div>
  );
}

export default App;
