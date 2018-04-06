var React = require('react')
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class');

class TodoComponent extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello</h1>
        <p>World</p>
      </div>
    );
  }
};

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
