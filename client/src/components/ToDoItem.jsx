import React, {Component} from 'react';
class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
  }

  handleCheckbox = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target.checked);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {

    return (
      <section>
        <span className='toDoName'>{this.props.todo.name}</span>
        <form className='formCheckbox'>
          <input className='isToDoComplete'
                name='complete'
                type='checkbox'
                checked={this.state.complete}
                onChange={this.handleCheckbox}/>
        </form>
      </section>
    );
  };
}
export default ToDoItem;