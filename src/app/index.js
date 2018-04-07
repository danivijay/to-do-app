let React = require('react')
let ReactDOM = require('react-dom')
let createReactClass = require('create-react-class');

// css
require('./css/index.css');

// components
let TodoItem = require('./todoItem')
let AddItem = require('./addItem')

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
      <div id="todo-list">
          <p>The busiest people have the most leisure...</p>
          <ul>{todos}</ul>
          <AddItem onAdd={this.onAdd} />
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
  },
  onAdd(item) {
    let updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
