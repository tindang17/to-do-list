import React, {Component} from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render () {
    let todos = this.props.todos.map(todo => {
      return <tr key={todo.id.toString()}><td><ToDoItem todo={todo} /></td></tr>;
    })
    return (
      <section className='todo-list'>
        <table>
          <tbody>
            {todos}
          </tbody>
        </table>
      </section>
    );
  };
}
export default ToDoList;