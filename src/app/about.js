let React = require('react')
import {Link} from 'react-router'

let createReactClass = require('create-react-class');

let About = createReactClass({
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <h2>Auther: Dani Vijay</h2>
      </div>
    );
  }
});

module.exports = About
