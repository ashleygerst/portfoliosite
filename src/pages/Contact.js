import React, { Component } from 'react';

class Contact extends Component {

  componentDidMount(){
   this.setState({ title: 'Contact us' });
  }
 
  render() {
   return (
    <div>
     <article>Your contact us contents will be here..</article>  
    </div>
   );
  }
 }
 

export default Contact