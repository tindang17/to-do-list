import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import ReactDOM from 'react-dom';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  updateToDo = (item) => {
    const toDoItem = {name: item, complete: false};
    this.setState({todos : this.state.todos.concat(toDoItem)});
  }
  render() {
    console.log('IN APP', this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.jsx</code> and save to reload.
        </p>
        <div>
          <ToDoForm updateToDo = {this.updateToDo}/>
          <ToDoList todos = {this.state.todos}/>
        </div>
      </div>
    );
  };
}
export default App;
