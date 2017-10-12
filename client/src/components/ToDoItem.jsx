import React, {Component} from 'react';
class ToDoItem extends Component {
  render() {
    return (
      <div>
        <form>
          <span className='toDoName'>{this.props.todo.name}</span>
          <input className='isToDoComplete' type='checkbox' value={this.props.todo.complete} />
        </form>
      </div>
    );
  };
}
export default ToDoItem;