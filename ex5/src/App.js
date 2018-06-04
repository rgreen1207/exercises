import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Accordion title="This is Ryan's React Box"/>
      </div>
    );
  }
}

export default App;
