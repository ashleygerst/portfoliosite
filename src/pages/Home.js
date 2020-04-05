import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
        
    };
    
}


  
  render() {
      return (
        <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>NuCamp</h1>
                                <h2>a better way to camp</h2>
                            </div>
                        </div>
                    </div>
            </Jumbotron>
        </React.Fragment>
    );
  }
}

export default Home