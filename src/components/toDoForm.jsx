// ToDoList form
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit (e) {
    const self = this.state;
    e.preventDefault();
    this.props.onFormSubmit(self.item);
    this.setState({item: ''});
    ReactDOM.findDOMNode(this.refs.item).focus();
    return;
  };

  handleChange (e) {
    this.setState({
      item: e.target.value
    });
  };

  render() {
    return (
      <div className='row'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group col-sm-10'>
            <input type='text'className='todoForm' ref='item' 
                  onChange={this.handleChange} value={this.state.item} />
            <input type='submit' className='todoAdd' value='Add' />
          </div>
        </form>
      </div>
    );
  };
}
export default ToDoForm;