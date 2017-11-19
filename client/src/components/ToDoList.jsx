import React, {Component} from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render () {
    let todos = this.props.todos.map(todo => {
      return <tr key={todo.id.toString()}><ToDoItem todo={todo} /></tr>;
    })
    return (
      <table className='ToDoList'>
        <tbody>
          {todos}
        </tbody>
      </table>
    );
  };
}
export default ToDoList;