import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro",
    };
}


  render() {

    return (
      
          <div className="navContainer">
            
            {/* <div style={{width: 'fit-content'}} onClick={this.props.changeState('Home')}>
            <h1 className={(this.props.currentPage === 'Home') ? 'navText active noHover' : 'navText'}>home</h1>
            </div> */}

            <div style={{width: 'fit-content'}} onClick={this.props.changeState('About')}>
            <h1 className={(this.props.currentPage === 'About') ? 'navText active noHover' : 'navText'}>about</h1>
            </div>

            <div style={{width: 'fit-content'}} onClick={this.props.changeState('Projects')}>
            <h1 className={(this.props.currentPage === 'Projects') ? 'navText active noHover' : 'navText'}>projects</h1>
            </div>  

            <div style={{width: 'fit-content'}} onClick={this.props.changeState('Contact')}>
            <h1 className={(this.props.currentPage === 'Contact') ? 'navText active noHover' : 'navText'}>contact</h1>
            </div>
          </div>

    )
      
  }
}

export default Navigation