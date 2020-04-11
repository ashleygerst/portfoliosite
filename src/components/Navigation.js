import React, { Component } from 'react';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro",
    };
}


  render() {

    return (
      
          <container className="navContainer">
            <div onClick={this.props.changeState('Home')}>
            <h1 className="navText">HOME</h1>
            </div>

            <div onClick={this.props.changeState('About')}>
            <h1 className="navText">ABOUT</h1>
            </div>

            <div onClick={this.props.changeState('Projects')}>
            <h1 className="navText">PROJECTS</h1>
            </div>  

            <div onClick={this.props.changeState('Contact')}>
            <h1 className="navText">CONTACT</h1>
            </div>
          </container>

    )
      
  }
}

export default Navigation