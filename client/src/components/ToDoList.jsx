import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
class ToDoList extends Component {
  render () {
    let todos = this.props.todos.map(todo => {
      return <ToDoItem todo = {todo} key = {todo.id} />;
    })
    return (
      <main className='todos'>
        {todos}
      </main>
    );
  };
}
export default ToDoList;