import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import ReactDOM from 'react-dom';


class App extends Component {
  // set initial stage
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.jsx</code> and save to reload.
        </p>
      </div>
    );
  };
}
export default App;
