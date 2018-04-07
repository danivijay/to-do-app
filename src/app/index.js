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
        <TodoItem item={item} key={index} />
      );
    });
    return(
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
});

let TodoItem = createReactClass({
  render: function() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
