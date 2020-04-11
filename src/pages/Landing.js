import React, { Component } from 'react';
import Intro from './Intro';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Header from '../components/Header';


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
        {currentPage !== 'Intro' && <Navigation changeState={this.changeState}/>}
        {currentPage !== 'Intro' && <Header currentPage={currentPage} changeState={this.changeState}/>}
        {currentPage === 'Intro' && <Intro changeState={this.changeState}/>}
        {currentPage === 'Home' && <Home/>}
        {currentPage === 'About' && <About/>}
        {currentPage === 'Projects' && <Projects changeState={this.changeState}/>}
        {currentPage === 'Contact' && <Contact/>}
        {currentPage !== 'Intro' && <Footer changeState={this.changeState}/>}
      </div>
    );
  }
}

export default Landing