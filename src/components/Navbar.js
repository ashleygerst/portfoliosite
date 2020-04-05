import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro"
    };
    
}


  render() {

    return (
        <>
        <div onClick={this.props.changeState('Home')}>
        <h1>Home</h1>
        </div>

        <div onClick={this.props.changeState('About')}>
        <h1>About</h1>
        </div>

        <div onClick={this.props.changeState('Projects')}>
        <h1>Projects</h1>
        </div>  

        <div onClick={this.props.changeState('Home')}>
        <h1>Contact</h1>
        </div>
        </>
    )
      
  }
}

export default Navbar