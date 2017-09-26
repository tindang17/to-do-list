import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class ToDoCatalogForm extends Component {
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
          <div className='form-group col-sm-10' style={{width:'330px'}}>
            <input type='text'className='todoCatalogForm' ref='item' 
                  onChange={this.handleChange} value={this.state.item} />
            <input type='submit' className='todoCatalogAdd' value='Add' />
          </div>
        </form>
      </div>
    );
  };
}
export default ToDoCatalogForm;