import React from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from 'prop-types';
const ToDoList = props => {
  let todos = props.todos.map(todo => {
    return (
      <tr key={todo.id.toString()}>
        <ToDoItem todo={todo} />
      </tr>
    );
  });
  return (
    <table className="ToDoList">
      <tbody>{todos}</tbody>
    </table>
  );
}
export default ToDoList;