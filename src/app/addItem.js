let React = require('react')

let createReactClass = require('create-react-class');

//css
require('./css/addItem.css')

let AddItem = createReactClass({
  render() {
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Hit me" />
      </form>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
})

module.exports = AddItem;
