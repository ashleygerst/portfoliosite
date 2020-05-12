import React, { Component } from 'react';

class AboutHome extends Component {
  constructor(props) {
    super(props);
    this.state={
        aboutCategory: "aboutHome",
    };
  }

  render() {
    return (
      <div>
      <div style={{width: 'fit-content'}} className= "aboutContent2">
        <img className="meAndMagoo" src="../meandmagoo.png"></img>
          <div className="aboutMe">
            <h4>Hello!</h4> 
            <p>I am currently a Project Manager working full time at Branding Brand while also finishing a full stack bootcamp to pursue a career as a software engineer. I have 2 years of experience in the e-commerce/tech industry and a background in account management, sales and marketing. My time at Branding Brand has inspired my curiosity of how things work technically, and it has motivated me to shift my career goals as I am actively working towards becoming a front end developer.</p> 
          </div>
      </div>
        <div className= "aboutContent">
          <div style={{width: 'fit-content'}} className= "aboutSchool" onClick={this.props.changeAboutCategory('Education')}>
            <img className="graduation" src="../graduation.png"></img>
              <h4 className= "aboutCategory">EDUCATION</h4>
          </div>
          <div style={{width: 'fit-content'}} className="aboutWork" onClick={this.props.changeAboutCategory('Employment')}>
            <img className="job" src="../job.png"></img>
              <h4 className= "aboutCategory">EMPLOYMENT</h4>
          </div>
          <div style={{width: 'fit-content'}} className="aboutSkills" onClick={this.props.changeAboutCategory('Skills')}>
            <img className="muscle" src="../muscle.png"></img>
              <h4 className= "aboutCategory">SKILLS</h4>
          </div>
          <div style={{width: 'fit-content'}} className="aboutTools" onClick={this.props.changeAboutCategory('Tools')}>
            <img className="tool" src="../tool.png"></img>
              <h4 className= "aboutCategory">TOOLS</h4>
          </div>
        </div>
      </div>
      )
    }
  }

export default AboutHome