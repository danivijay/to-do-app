let React = require('react')
let ReactDOM = require('react-dom')
let createReactClass = require('create-react-class');

// css
require('./css/todoItem.css');

let TodoItem = createReactClass({
  render: function() {
    return(
      <li>
          <div className="todo-item">
              <span className="item-name">{this.props.item}</span>
              <span className="item-remove" onClick={this.handleDelete}> x </span>
          </div>
      </li>
    );
  },
  handleDelete() {
    this.props.onDelete(this.props.item);
  }
});

module.exports = TodoItem;