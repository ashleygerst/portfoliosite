import React, { Component } from 'react';
import HomeSubHeader from '../components/HomeSubHeader'


class Home extends Component {

  render() {
      return (
        <div className="container">
          <div className="homeSubHeader">
                {<HomeSubHeader HomeSubHeader/>}
          </div>
        </div>
    );
  }
}

export default Home