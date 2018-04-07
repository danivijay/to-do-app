import { link } from 'fs';

let React = require('react')
let ReactDOM = require('react-dom')
let createReactClass = require('create-react-class');

let TodoComponent = createReactClass({
  getInitialState: function() {
    return {
      todos: ['washup', 'take a nap']
    }
  },
  render: function() {
    let todos = this.state.todos;
    todos = todos.map(function(item, index){
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      );
    }.bind(this));
    return(
      <div>
        <p>Click me</p>
        <ul>
          {todos}
        </ul>
      </div>
    );
  },
  onDelete(item) {
    let updatedTodos = this.state.todos.filter((val, index)=> {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  }
});

let TodoItem = createReactClass({
  render: function() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },
  handleDelete() {
    this.props.onDelete(this.props.item);
  }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
