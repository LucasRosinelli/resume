import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;