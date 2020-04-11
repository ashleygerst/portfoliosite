import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render(){
      return (
        <div>
        {this.props.currentPage === 'Home' && 
          <Jumbotron className="header bg-white"><h1>ASHLEY GERST</h1></Jumbotron>}
        {this.props.currentPage === 'About' &&
          <Jumbotron className="header bg-white"><h1>ABOUT ME</h1></Jumbotron> }
        {this.props.currentPage === 'Projects' &&
          <Jumbotron className="header bg-white"><h1>MY PROJECTS</h1></Jumbotron> }
        {this.props.currentPage === 'Contact' &&
          <Jumbotron className="header bg-white"><h1>GET IN TOUCH</h1></Jumbotron> }
        </div>
    );
  }
}

export default Header