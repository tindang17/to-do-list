import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import ReactDOM from 'react-dom';
import ToDoForm from './components/toDoForm.jsx';
import ToDoList from './components/toDoList.jsx';
import ToDoCatalogForm from './components/toDoCatalogForm.jsx';
import ToDoCatalog from './components/toDoCatalog.jsx';
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
      toDo: [
        { name: 'Tin',
          items: [
            {name: 'ToDo item #1',isDone: false},
            {name: 'ToDo item #2', isDone: false}
          ]},
        { name: 'Steven', 
          items: [
            {name: 'Code', isDone: false},
            {name: 'Eat', isDone: false}
          ]}
      ],
      selectedCatalog: '0'
    };
    this.updateItems = this.updateItems.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.addCatalog = this.addCatalog.bind(this);
    this.setSelectedCatalog = this.setSelectedCatalog.bind(this);
  };
  // update to do list
  updateItems (newItem) {
    const item = {name: newItem, isDone: false};
    let newToDo = this.state.toDo;
    const allItems = this.state.toDo[this.state.selectedCatalog]
                    .items.concat([item]);
    newToDo[this.state.selectedCatalog].items = allItems;
    this.setState({toDo: newToDo});
  };

  deleteItems (index) {
    // copy the array
    let newToDo = this.state.toDo;
    const allItems = this.state.toDo[this.state.selectedCatalog]
                    .items.slice();
    // remove one element from the stated index
    allItems.splice(index, 1);
    newToDo[this.state.selectedCatalog].items = allItems;
    this.setState({
      toDo: newToDo
    });
  };

  addCatalog (newCatalog) {
    const catalog = {name: newCatalog, items: [{name: 'ToDo item #1', isDone: false}]};
    const newToDo = this.state.toDo.concat([catalog]);
    this.setState({
      toDo: newToDo
    });
  };

  setSelectedCatalog (index) {
    this.setState({
      selectedCatalog: index
    });
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
        <div className='todoApp'>
          <ToDoBanner />
          <div className='row'>
            <div className='col-xs-3'>
              <ToDoCatalogForm onFormSubmit = {this.addCatalog} />
              <ToDoCatalog selectedID = {this.state.selectedCatelog} 
                          onSelected={this.setSelectedCatalog} 
                          toDos = {this.state.toDo} />
            </div>
            <div className="col-xs-6">
              <ToDoForm onFormSubmit = {this.updateItems} />
              <ToDoList items = {this.state.toDo[this.state.selectedCatalog].items} onDelete={this.deleteItems}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default App;
