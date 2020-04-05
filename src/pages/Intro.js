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
        {currentPage === 'Intro' && <h1> Hi, I'm Ashley Gerst. I'm a fullstack web developer. </h1>}
        <button onClick={this.props.changeState('Home')}>View my Work</button>
      </div>
    );
  }
}

export default Intro