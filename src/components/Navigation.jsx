import React, {Component} from 'react';
import './styles/app.css';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
    <div id='navigator' className='Navigation'>
    <nav  {...this.props}>
      <ul>
          <li> <Link className="go-back" to={'/'}>Home</Link></li>
        <li>Movies</li>
        <li>Pay Per View</li>
        <li>Kids</li>
        <li>TV Stream</li>
        <li>News and Popular</li>
      </ul>
    </nav>
  </div>)}

}

export default Navigation;

