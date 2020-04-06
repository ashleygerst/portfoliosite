import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro"
    };
    
}


  render() {

    return (
        <>
        <a className= "btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/agerst/"><i className="fa fa-linkedin"></i></a>

        <a className= "btn btn-social-icon btn-github" href="https://github.com/ashleygerst/portfolio/"> <i className="fa fa-github"></i></a>

        <a className= "btn btn-social-icon btn-facebook" href="https://www.facebook.com/hashslingyslash/"> <i className="fa fa-facebook"></i></a>

        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/hashslingyslash/"> <i className="fa fa-instagram" /></a>
        </>
    )
      
  }
}

export default Footer