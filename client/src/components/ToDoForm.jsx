import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/todos', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
        name: this.state.name,
        complete: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.text();
    })
    .catch(error => {
      console.log(error);
    });
    this.setState({name: ''});
    this.props.updateToDo(this.state.name);
  };

  handleInputChange = (e) => {
    const target = e.target;
    const item = target.value;
    this.setState({name : item});
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange}/>
        <input type='submit' value='submit'/>
      </form>
    );
  };
}
export default ToDoForm;