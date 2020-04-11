import React from 'react';
import { PROJECTS } from '../shared/projects';
import ProjectsNav from '../components/ProjectsNav';
import { Card, CardImg, CardBody, CardTitle, Col, CardGroup } from 'reactstrap';


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

   renderProjects = () => {
    if (this.state.projectsToShow === 'All') {
      return (PROJECTS.map(project => {
        return (
          <div>
            <Col sm="3">
            <CardGroup>
            <Card>
            <a href={project.link}><CardImg src={project.image} alt="projects" top width="100%"/></a>
            <CardBody>
            <CardTitle>{project.name}</CardTitle>
            </CardBody>
            </Card>
            </CardGroup>
            </Col>
          </div>
        )
      }))
    }
    else {
     const filteredArray =  this.state.projects.filter(project => project.framework === this.state.projectsToShow);
     return (filteredArray.map(project => {
       return (
        <div>
        <Col sm="3">
          <CardGroup>
            <Card>
              <a href={project.link}><CardImg src={project.image} alt="projects" top width="100%"/></a>
              <CardBody>
                <CardTitle>{project.name}</CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </div>
       )
     }))
    }
   }

  render() {
    // const name = this.projects().map(project => project.name)
    // const image = this.projects().map(project => project.image)
    // const link = this.projects().map(project => project.link)
    return (
      <div>
      <ProjectsNav changeProjectsToShow={this.changeProjectsToShow}/>
      <div>
        {this.renderProjects()}
      </div>
      </div>
      )
    }
  }
    
 

export default Projects


