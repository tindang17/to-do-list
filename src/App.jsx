import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import ReactDOM from 'react-dom';
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
// ToDo List
class ToDoList extends Component {
  render() {
    const items = this.props.items.map(item => {
      return <ToDoListItem item = {item} key = {item.id} onDelete = {this.props.onDelete}/>
    });
    return (
      <main className='todoItems'>
        <ul>{items}</ul>
      </main>
    );
  };
}
// Items of ToDoList
class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };
  
  handleClick (e) {
    const target = e.target;
    const value = target.type==='checkbox' ? target.checked : target.value;
    this.setState({
      isDone: value
    });
  };

  handleDelete () {
    this.props.onDelete(this.props.item.name);
  }
  render() {
    let _style = 'line-through';
    if(!this.state.isDone) {
      _style= 'none';
    };
    return (
      <div className='todoItem'>
        <li>
          <span style={{'textDecoration': _style}}>{this.props.item.name}</span> 
          <input type='checkbox' onClick={this.handleClick} checked={this.state.isDone}/>
          <button type='button' name='delete' onClick={this.handleDelete}>&times;</button>
        </li>
      </div>
    );
  };
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
  };

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
    );
  };
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
