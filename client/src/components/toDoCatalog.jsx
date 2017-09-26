import React, {Component} from 'react';

class ToDoCatalog extends Component {

  changeToDo (e) {
    console.log(e.currentTarget.dataset.id)
    this.props.onSelected(e.currentTarget.dataset.id);  
  };

  render () {
    console.log(this)
    const selectedID = this.props.selectedID;
    const allItems = this.props.toDos;

    return <div className = 'list-group'> {
      allItems.map((item, i) => {
        let _class = '';
        if(i === selectedID) {
          _class = 'list-group-item active';
        } else {
          _class = 'list-group-item';
        };
        return (
          <a key={i} data-id={i} className={_class} onClick={this.changeToDo.bind(this)}>
            <span className='badge'>{item.items.length}</span>{item.name}</a>
        );
      }, this)  
    }</div>
  };
}

export default ToDoCatalog;