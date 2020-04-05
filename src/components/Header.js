import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentPage: "Intro"
    };
    
}


  render() {

    return (
        <>
        <div>
          Ashley Gerst
        </div>
        </>
    )
      
  }
}

export default Header