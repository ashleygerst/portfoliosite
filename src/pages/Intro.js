import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro"
    };
    
}


  render() {
    const { currentPage } = this.state
      return (
      <div>
        {currentPage === 'Intro' && <h1 className="intro"> Hi, I'm Ashley Gerst.<br/> I'm a full stack developer. </h1>}
        <button className="introButton" onClick={this.props.changeState('About')}>View my Work</button>
      </div>
    );
  }
}

export default Intro