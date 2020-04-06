import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render(){
      return (
        <div>
        {this.props.currentPage === 'Home' && 
          <Jumbotron className="header"><h1>Ashley Gerst</h1></Jumbotron>}
        {this.props.currentPage === 'About' &&
          <Jumbotron className="header"><h1>About Me</h1></Jumbotron> }
        {this.props.currentPage === 'Projects' &&
          <Jumbotron className="header"><h1>My Projects</h1></Jumbotron> }
        {this.props.currentPage === 'Contact' &&
          <Jumbotron className="header"><h1>Get in Touch</h1></Jumbotron> }
        {this.props.currentPage}
        </div>
    );
  }
}

export default Header