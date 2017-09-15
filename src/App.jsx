import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import ReactDOM from 'react-dom';
// 
class ToDoBanner extends Component {
  render () {
    return (
      <h3 className='todoBanner'>TODO List with React</h3>
    );
  }
}
// ToDo List
class ToDoList extends Component {
  render() {
    const createItem = (itemText) => {
      return (
        <ToDoListItem>{itemText}</ToDoListItem>
      );
    };
    return <ul>{this.props.items.map(createItem)}</ul>
  }
}
// Items of ToDoList
class ToDoListItem extends Component {
  render() {
    return (
      <li data-id={this.props.value} key={this.props.value}>{this.props.children} </li>
    );
  }
}
// ToDoList form
class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (e) {
    const self = this.state;
    e.preventDefault();
    this.props.onFormSubmit(self.item);
    this.setState({item: ''});
    ReactDOM.findDOMNode(this.refs.item).focus();
    return;
  };

  handleChange (e) {
    this.setState({
      item: e.target.value
    });
  };

  render() {
    return (
      <div className='row'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group col-sm-10'>
            <input type='text'className='todoForm' ref='item' 
                  onChange={this.handleChange} value={this.state.item} />
            <input type='submit' className='todoAdd' value='Add' />
          </div>
        </form>
      </div>
    )
  }
}
class App extends Component {
  // set initial stage
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.updateItems = this.updateItems.bind(this);
  }
  // update to do list
  updateItems (newItem) {
    const allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
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
          <ToDoList items = {this.state.items} />
        </div>
      </div>
    );
  }
}
export default App;
