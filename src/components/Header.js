import React, { Component } from 'react';

class Header extends Component {
  render(){
      return (
        <div>
        {this.props.currentPage === 'Home' && 
          <div className="headerMain"><img className="purp" src= "purp.png" alt="purple"/><p className="headerText homeHeader1">ashley 
          </p><h1 className="headerText homeHeader2">gerst</h1></div>}
        {this.props.currentPage === 'About' &&
          <div className="headerMain"><img className="purp" src= "purp.png" alt="purple"/><h1 className="headerText homeHeader1">about</h1><h1 className="headerText homeHeader2">me</h1></div> }
        {this.props.currentPage === 'Projects' &&
          <div className="headerMain"><img className="purp" src= "purp.png" alt="purple"/><h1 className="headerText homeHeader1">my</h1><h1 className="headerText homeHeader2">projects</h1></div> }
        {this.props.currentPage === 'Contact' &&
          <div className="headerMain"><img className="purp" src= "purp.png" alt="purple"/><h1 className="headerText homeHeader1">get</h1><h1 className="headerText homeHeader2">in touch</h1></div> }
        </div>
    );
  }
}

export default Header