import React, { Component } from 'react';
// import { Form, Checkbox, Button } from 'semantic-ui-react'; 
class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({name: ''});
    console.log('In Submit', this.state)
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