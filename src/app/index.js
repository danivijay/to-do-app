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
        <li key={index}>{item}</li>
      );
    });
    return(
      <div>
        <ul> 
          {todos}
        </ul>
        <h3>{this.state.age}</h3>
      </div>
    );
  }
});

let myCheese = {
  name: 'Camemberi',
  smellFactor: 'Extreme pong',
  price: '3.50'
}

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
