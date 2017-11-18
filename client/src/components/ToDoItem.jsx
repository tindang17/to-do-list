import React, {Component} from 'react';
class ToDoItem extends Component {
  render() {
    return (
      <section>
        <span className='toDoName'>{this.props.todo.name}</span>
        <form className='formCheckbox'>
          <input className='isToDoComplete' type='checkbox' value={this.props.todo.complete} />
        </form>
      </section>
    );
  };
}
export default ToDoItem;