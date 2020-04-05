import React, { Component } from 'react';
import Intro from './Intro';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from '../components/Navbar';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro"
    };
    
}

changeState = (pageToSet) => () => {
  this.setState({
    currentPage: pageToSet
  })
}

  
  render() {
    const { currentPage } = this.state
      return (
      <div>
        {currentPage !== 'Intro' && <Navbar changeState={this.changeState}/>}
        {currentPage === 'Intro' && <Intro changeState={this.changeState}/>}
        {currentPage === 'Home' && <Home/>}
        {currentPage === 'About' && <About/>}
        {currentPage === 'Projects' && <Projects/>}
        {currentPage === 'Contact' && <Contact/>}
      </div>
    );
  }
}

export default Landing