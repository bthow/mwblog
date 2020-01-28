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
      <Form name="contact" 
        method="post" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field" 
        onSubmit={this.handleSubmit}>

       <h3>{title}</h3>
       {desc} 
       <input type="hidden" name="form-name" value="contact"/>
       <Input type="text" name="name" placeholder="Name"  
              onChange={this.handleChange}></Input>
       <Input type="email" name="email" placeholder="Email"  
              onChange={this.handleChange}></Input>
       <Input type="textarea" name="message" placeholder="Message" 
              onChange={this.handleChange} ></Input>
        <p>
          <Button type="submit">{butText}</Button>
        </p> 
      </Form>
    )
  }
}
export default Contact

