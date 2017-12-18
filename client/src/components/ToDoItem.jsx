import React, { Component } from "react";
import PropTypes from 'prop-types';
class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
  }

  handleCheckbox = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <td>
        <span className="toDoName">{this.props.todo.name}</span>
        <input
          className="isToDoComplete"
          name="complete"
          type="checkbox"
          checked={this.state.complete}
          onChange={this.handleCheckbox}
        />
      </td>
    );
  }
}
export default ToDoItem;