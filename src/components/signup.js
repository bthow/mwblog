import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Form, Input, FormText, Alert } from 'reactstrap';

class SignUp extends React.Component {
   state = {
        email: null, 
        result: null,
        msg:"" 
    }
    
    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }


  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email, this.state) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
      this.setState(data);
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }

  cleanMessage(msg){
    const regex = /<.*\>/gm;
    const subst = ``;

    // The substituted value will be contained in the result variable
    const result = msg.replace(regex, subst);

    console.log('Substitution result: ', result); 
    return result;
  }
  
  mapResult(result){
    switch(result){
      case "error":
        return "danger";
        break;
      case "success":
        return result;
        break;
      default: 
        return "info";
        break;
    }
  }

  render() {
    const { blurbText } = this.props
    return (
      <Form onSubmit={this._handleSubmit}>
        <FormText>{blurbText}</FormText>
        <div class="input-group ms-4">
          <Input
              class="form-control"
              type="email"
              onChange={this._handleChange}
              placeholder="Enter your email..."
              name="email"
          />
          <button class="btn btn-danger" 
            type="submit">Subscribe</button>
          <div class="input-group pt-2">
            <Alert 
              color={this.mapResult(this.state.result)} 
              isOpen={(this.state.result !== null)}
            >
              {this.cleanMessage(this.state.msg)}
            </Alert>
          </div>
        </div>
      </Form>
	
    )
  }
}
export default SignUp

