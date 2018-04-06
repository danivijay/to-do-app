var React = require('react')
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class');

var TodoComponent = createReactClass({
  getInitialState: function() {
    return {
      todos: ['washup', 'take a nap']
    }
  },
  render: function() {
    return(
      <div>
        <p> 
          {this.state.todos[0]}<br/>
          {this.state.todos[0]}<br/>
          {this.state.todos[0]}<br/>
        </p>
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
