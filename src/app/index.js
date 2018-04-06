var React = require('react')
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class');

class TodoComponent extends React.Component{
  render(){
    return(
      <div>
        <p> 
          Cheese {this.props.cheese.name}
        </p>
      </div>
    );
  }
};

let myCheese = {
  name: 'Camemberi',
  smellFactor: 'Extreme pong',
  price: '3.50'
}

ReactDOM.render(<TodoComponent msg="I like cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'));
