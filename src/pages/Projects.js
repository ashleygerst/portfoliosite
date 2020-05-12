import React from 'react';
import { PROJECTS } from '../shared/projects';
import ProjectsNav from '../components/ProjectsNav';




class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: PROJECTS,
      projectsToShow: "All"
    }
  }

  changeProjectsToShow = (projectsToShow) => () => {
      this.setState ({
        projectsToShow : projectsToShow
      })
   }
   determineImageStyle = (i) => {
    switch (i) {
      case 0 : 
        return "nucampImg1"
      case 1 : 
        return "eastwestImg"
      case 2 :
        return "nucampImg2"
      case 3 :
        return "hayloImg"
      default : 
        return "projectImage"
    }
   }
   renderProjects = () => {
    if (this.state.projectsToShow === 'All') {
      return (PROJECTS.map((project, i) => {
        return (

          <container className={(i % 2 === 0) ? 'projectsNav' : 'projectsNav2'}>
          <a className={this.determineImageStyle(i)} href={project.link}><img className={this.determineImageStyle(i)} src={project.image} alt="projects" top width="100%"/></a>
          <hr/>
          <br />
          <div>
          <h4 className={(i % 2 === 0) ? 'projectsName' : 'projectsName2'}>{project.name}</h4>
          <h5 className={(i % 2 === 0) ? 'projectsName' : 'projectsName2'}>{project.framework}</h5>
          <p className={(i % 2 === 0) ? 'projectsName' : 'projectsName2'}>{project.description}</p></div>
          </container>

        )
      }))
    }
    else {
     const filteredArray =  this.state.projects.filter(project => project.framework === this.state.projectsToShow);
     return (filteredArray.map((project, i) => {
      return (

        <container className={(i % 2 === 0) ? 'projectsNav' : 'projectsNav2'}>
        <a className={this.determineImageStyle(i)} href={project.link}><img className={this.determineImageStyle(i)} src={project.image} alt="projects" top width="100%"/></a>
        <hr/>
        <br />
        <div>
        <h4 className={(i % 2 === 0) ? 'projectsName' : 'projectsName2'}>{project.name}</h4>
        <h5 className={(i % 2 === 0) ? 'projectsName' : 'projectsName2'}>{project.framework}</h5>
        <p className={(i % 2 === 0) ? 'projectsName' : 'projectsName2'}>{project.description}</p></div>
        </container>


       )
     }))
    }
   }

  render() {
    return (
      <div>
      <ProjectsNav changeProjectsToShow={this.changeProjectsToShow} projectsToShow={this.state.projectsToShow}/>
      <div>
        {this.renderProjects()}
      </div>
      </div>
      )
    }
  }
    
 

export default Projects


