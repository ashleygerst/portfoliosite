import React, { Component } from 'react';

class ProjectsNav extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "All"
    };
    
}


  render() {

    return (
        <container className= "projectNav">
        <div className="projectMenu" onClick={this.props.changeProjectsToShow('All')}>
        All
        </div>

        <div className="projectMenu" onClick={this.props.changeProjectsToShow('Bootstrap')}>
        Bootstrap

        </div>

        <div className="projectMenu" onClick={this.props.changeProjectsToShow('React')}>
        React
        </div>  

        <div className="projectMenu" onClick={this.props.changeProjectsToShow('React Native')}>
        React Native
        </div>
        </container>
    )
      
  }
}

export default ProjectsNav