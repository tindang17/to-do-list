// ToDo List
import React, {Component} from 'react';
import ToDoListItem from './toDoListItem.jsx';
class ToDoList extends Component {
  render() {
    const items = this.props.items.map(item => {
      return <ToDoListItem item = {item} key = {item.id} onDelete = {this.props.onDelete}/>
    });
    return (
     
     <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className='todoItems'>
              <ul style={{width:'1040px'}}>{items}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default ToDoList;