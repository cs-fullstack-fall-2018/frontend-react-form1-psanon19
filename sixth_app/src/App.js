import React, { Component } from 'react';
import './App.css';
import PersonStats from './PersonStats.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/pyfueim.gif" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <PersonStats className="PatientWriteUp" >Here is Text
          </PersonStats>
          <div id="PatientWriteDown">
        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </div>
    );
  }
}

export default App;
