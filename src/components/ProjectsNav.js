import React, { Component } from 'react';


class ProjectsNav extends Component {


  render() {

    return (
        <container className= "projectNav">
        <div className={(this.props.projectsToShow === 'All') ? 'projectMenu activeProject' : 'projectMenu'} onClick={this.props.changeProjectsToShow('All')}>
        All
        </div>

        <div className={(this.props.projectsToShow === 'Bootstrap') ? 'projectMenu activeProject' : 'projectMenu'} onClick={this.props.changeProjectsToShow('Bootstrap')}>
        Bootstrap

        </div>

        <div className={(this.props.projectsToShow === 'React') ? 'projectMenu activeProject' : 'projectMenu'} onClick={this.props.changeProjectsToShow('React')}>
        React
        </div>  

        <div className={(this.props.projectsToShow === 'reactNative') ? 'projectMenu activeProject' : 'projectMenu'} onClick={this.props.changeProjectsToShow('reactNative')}>
        React Native
        </div>
        </container>
    )
      
  }
}

export default ProjectsNav