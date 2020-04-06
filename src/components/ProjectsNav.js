import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

class ProjectsNav extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro"
    };
    
}


  render() {

    return (
      
        <Navbar>
        <div onClick={this.props.changeState('All')}>
        <h1>All</h1>
        </div>

        <div onClick={this.props.changeState('Bootstrap')}>
        <h1>Bootstrap</h1>
        </div>

        <div onClick={this.props.changeState('React')}>
        <h1>React</h1>
        </div>  

        <div onClick={this.props.changeState('reactNative')}>
        <h1>React Native</h1>
        </div>
        </Navbar>
    )
      
  }
}

export default ProjectsNav