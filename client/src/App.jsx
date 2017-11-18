import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './style/container.css';
import './style/todoForm.css';

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

  componentDidMount() {
    fetch('/api/todos')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.map(item => {
        return {name: item.todo, complete: item.complete};
      });
      console.log(filteredData);
      this.setState({todos: this.state.todos.concat(filteredData)});
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the ToDoList</h2>
        </div>
        <div className="container">
          <h2 className="container-header">Get things done</h2>
          <main className="container-body">
            <ToDoForm updateToDo = {this.updateToDo}/>
            <ToDoList todos = {this.state.todos}/>
          </main>
        </div>
      </div>
    );
  };
}
export default App;
