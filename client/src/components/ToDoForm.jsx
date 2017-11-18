import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
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
      return response.json();
    })
    .catch(error => {
      console.log(`There is an error while inputting data ${error}`);
    });
    this.setState({name: ''});
    this.props.updateToDo(this.state.name);
  };


  handleInputChange = (e) => {
    const target = e.target;
    const item = target.value;
    this.setState({name : item});
  };
  componentDidMount() {
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <input className='input-field' type='text' name='name' value={this.state.name} onChange={this.handleInputChange}/>
        <input className='form-button' type='submit' value='submit' disabled={!this.state.name}/>
      </form>
    );
  };
}
export default ToDoForm;