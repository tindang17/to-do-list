import React, { Component } from 'react';

import ToDoBanner from './toDoBanner.jsx';
import ToDoForm from './toDoForm.jsx';
import ToDoList from './toDoList.jsx';
import ToDoCatalogForm from './toDoCatalogForm.jsx';
import ToDoCatalog from './toDoCatalog.jsx';

class ToDoApp extends Component {
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
      <div className='todoApp'>
        <ToDoBanner />
        <div className='row'>
          <div className='col-xs-3'>
            <ToDoCatalogForm onFormSubmit = {this.addCatalog} />
            <ToDoCatalog selectedID = {this.state.selectedCatelog} 
                        toDo = {this.state.toDo} onSelected={this.setSelectedCatalog} />
          </div>
          <div className="col-xs-6">
            <ToDoForm onFormSubmit = {this.updateItems} />
            <ToDoList items = {this.state.toDo[this.state.selectedCatalog].items} onDelete={this.deleteItems}/>
          </div>
        </div>
      </div>
    )  
  }
}
export default ToDoApp