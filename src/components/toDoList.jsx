// ToDo List
import React, {Component} from 'react';
import ToDoListItem from './ToDoListItem.jsx'
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

export default ToDoList;