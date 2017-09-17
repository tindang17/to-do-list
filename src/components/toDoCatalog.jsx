import React, {Component} from 'react';

class ToDoCatalog extends Component {
  constructor(props) {
    super(props);
    this.changeToDo = this.changeToDo.bind(this);
  }
  changeToDo (e) {
    // console.log(e.currentTarget.dataset.id)
    this.props.onSelected(e.currentTarget.dataset.id);  
  };

  render () {
    const allItems = this.props.toDo;
    const selectedID = this.props.selectedID;
    console.log('in render ALLITEMS', allItems)
    return <div className = 'list-group'> {
      allItems.map((item, i) => {
        let _class = '';
        if(i === selectedID) {
          _class = 'list-group-item active';
        } else {
          _class = 'list-group-item';
        };
        return (
          <a href='#' key={i} data-id={i} className={_class} onClick={this.changeToDo}>
            <span className='badge'>{item.items.length}</span>{item.name}</a>
        );
      }, this)  
    }</div>
  };
}

export default ToDoCatalog;