import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText, TextArea } from 'reactstrap';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => alert('Thanks, ' + form.getAttribute("action") + 'Sent'))
      .catch(error => alert(error));
  };

  render() {
    const { title, desc, commentType } = this.props
    const butText = (commentType ? commentType : "Send")    

    return (
      <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">{title}</h2>
          <h3 class="section-subheading text-muted">{desc}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <Form name="contact" 
            method="post" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field" 
            onSubmit={this.handleSubmit}>
            <Input type="hidden" name="form-name" value="contact"/>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <Input class="form-control" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." onChange={this.handleChange}></Input>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <Input class="form-control" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." onChange={this.handleChange}></Input>
       
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <Input class="form-control" id="phone" type="tel" placeholder="Your Phone *" data-validation-required-message="Please enter your phone number."></Input>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <Button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">{butText}</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
    )
  }
}
export default Contact

