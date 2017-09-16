import React, {Component} from 'react';
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
  };
  render() {
    let _style = 'line-through';
    if(!this.state.isDone) {
      _style= 'none';
    };
    return (
      <div class='container'>
        <div className='todoItem'>
          <li>
            <span style={{'textDecoration': _style}}>{this.props.item.name}</span> 
            <input type='checkbox' className='todoIsDone' onClick={this.handleClick} checked={this.state.isDone}/>
            <button type='button' className='deleteToDo' onClick={this.handleDelete}>&times;</button>
          </li>
        </div>
      </div>
    );
  };
}
export default ToDoListItem;