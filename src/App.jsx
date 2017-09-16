import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import ReactDOM from 'react-dom';
import ToDoForm from './components/toDoForm.jsx';
import ToDoList from './components/toDoList.jsx';
// 
class ToDoBanner extends Component {
  render () {
    return (
      <div className='todoBanner'>
        <h3>TODO List with React</h3>
      </div>
    );
  }
}

class App extends Component {
  // set initial stage
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'ToDo item #1',
          isDone: false
        },
        {
          name: 'ToDo item #2',
          isDone: true
        }
      ]
    };
    this.updateItems = this.updateItems.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
  };
  // update to do list
  updateItems (newItem) {
    const item = {name: newItem, isDone: false};
    const allItems = this.state.items.concat([item]);
    this.setState({items: allItems});
  };

  deleteItems (index) {
    // copy the array
    const newData = this.state.items.slice();
    // remove one element from the stated index
    newData.splice(index, 1);
    this.setState({
      items: newData
    });
  }


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
        <div>
          <ToDoBanner />
          <ToDoForm onFormSubmit = {this.updateItems} />
          <ToDoList items = {this.state.items} onDelete={this.deleteItems}/>
        </div>
      </div>
    );
  };
}
export default App;
