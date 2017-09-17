import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ToDoApp from './components/toDoApp.jsx'

class App extends Component {
  // set initial stage
  constructor(props) {
    super(props);
  }
  render () {
    const routes = [
      { path: '/',
        main: () => <ToDoApp />},
      
      { path: '/dashboard',
        main: () => <h2>dashboard</h2>
      }
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.jsx</code> and save to reload.
        </p>
        <Router>
          <div style={{ display: 'flex' }}>
            <div style={{
              padding: '10px',
              width: '10%',
            }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
              {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
            </div>
          </div>
        </Router>
        <ToDoApp />
      </div>
    );
  }
}
export default App;
