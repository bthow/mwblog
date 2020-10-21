import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Form, Input, FormText } from 'reactstrap';

class SignUp extends React.Component {
 state = {
        name: null,
        email: null,
	
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
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
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
            type="button">Subscribe</button>
          <div class="input-group-append">
          </div>
        </div>
      </Form>
	
    )
  }
}
export default SignUp

