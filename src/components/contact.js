import React from "react"
import { Button, Form, Input } from 'reactstrap'
import ButtonSend from './buttonSend';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sent:false, sending:false };
  }

  handleChange = e => {
    this.setState({sent:false, sending:false, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log('sending');
    this.setState({sending:true});

    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => {
        this.setState({sent: true, sending: false});
      })
      .catch(error => alert(error));
  };

  render() {
    const { title, desc, commentType } = this.props

    return (
      <div class="container mwContact">
      <div class="row">
        <div class="col-lg-12 mb-4 text-center">
          <h2 class="section-heading text-uppercase">{title}</h2>
          <h3 class="section-subheading ">{desc}</h3>
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
                  <Input class="form-control" size="lg" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." onChange={this.handleChange}></Input>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <Input class="form-control" size="lg" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." onChange={this.handleChange}></Input>
       
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <Input class="form-control" size="lg" name="phone" type="tel" placeholder="Your Phone" ></Input>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <Input type="textarea" class="form-control"  size="lg"  name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." onChange={this.handleChange} />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <ButtonSend sending={this.state.sending} 
                        sent={this.state.sent} 
                />
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

