let React = require('react')
let ReactDOM = require('react-dom')
let createReactClass = require('create-react-class');

let TodoComponent = createReactClass({
  getInitialState: function() {
    return {
      todos: ['washup', 'take a nap'],
      age: 30
    }
  },
  render: function() {
    let ager = setTimeout(function(){
      this.setState({
        age: 35
      });
    }.bind(this), 5000);
    return(
      <div>
        <p> 
          {this.state.todos[0]}<br/>
          {this.state.todos[0]}<br/>
          {this.state.todos[0]}<br/>
        </p>
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
