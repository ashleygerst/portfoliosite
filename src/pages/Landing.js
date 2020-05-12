import React, { useRef, Component } from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CSSTransitionGroup } from 'react-transition-group'; 

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro",
        active: false,
        topActive: false
    };
    
}

changeState = (pageToSet) => () => { 
  this.setState({
    active: true
  })
  setTimeout(() => {
  this.setState({
    active: false,
    topActive: true
  })
},400)
  setTimeout(() => {
    this.setState({
      currentPage: pageToSet,
      active: false,
      topActive: false
    })
  },800)
}



  render() {
    const { currentPage } = this.state
      return (
        <div>
        <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={300}>
        {currentPage !== 'Intro' && <Navigation currentPage={currentPage} changeState={this.changeState}/>}
        </CSSTransitionGroup>
        <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={300}>
        {currentPage !== 'Intro' && <Header currentPage={currentPage} changeState={this.changeState}/>}
        </CSSTransitionGroup>
        {currentPage === 'Intro' && <Intro changeState={this.changeState}/>}
        {/* <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        {currentPage === 'Home' && <Home HomeSubHeader={HomeSubHeader}/>}
        </CSSTransitionGroup> */}
        <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        {currentPage === 'About' && <About currentPage={currentPage} About={About}/>}
        </CSSTransitionGroup>
        <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        {currentPage === 'Projects' && <Projects changeState={this.changeState}/>}
        </CSSTransitionGroup>
        <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        {currentPage === 'Contact' && <Contact />}
        </CSSTransitionGroup>
        {currentPage !== 'Intro' && <Footer changeState={this.changeState}/>}
        
        <div style={this.state.topActive ? {height: '100%'} : {height: 0}} className='transitionScreenTop'></div>
        <div style={this.state.active ? {height: '100%'} : {height: 0}} className='transitionScreen'></div>
        <div style={this.state.paget ? {height: '100%'} : {height: 0}} className='transitionScreenContent'></div>
      </div>
    );
  }
}

export default Landing