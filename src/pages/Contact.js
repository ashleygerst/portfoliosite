import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  name: '',
                  email: '',
                  message: '',
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.email + this.state.message);
    event.preventDefault();
  }

  render() {
    return (
      <container>
      <h4 className="contactPage">Have a question or want to work together?</h4>
      <Form className="Form" onSubmit={this.handleSubmit}>
        <FormGroup className="contactForm">
            <Label for="name"></Label>
            <Col sm={14}>
              <Input type="name" id="name" placeholder="Name" name={this.state.name} onChange={this.handleChange} /> <br/>
            </Col>
            </FormGroup>
            <FormGroup className="contactForm">
            <Label for="email"></Label>
            <Col sm={14}>
              <Input type="email" name="email" id="email" placeholder="Email Address" email={this.state.email} onChange={this.handleChange} /> <br/>
            </Col>
            </FormGroup>
            <FormGroup className="contactForm">
            <Label for="message"></Label>
            <Col sm={14}>
              <Input type="textarea" className="formField textArea" placeholder="Your Message" message={this.state.message} onChange={this.handleChange}rows="10"  /> <br/>
              </Col>
            </FormGroup> 
            <br/> <br/>
            <Col className="contactButton">
            <Button className="submitButton">Submit</Button>
            </Col>
      </Form>
      </container>
    );
  }
}

           
export default Contact;
 
