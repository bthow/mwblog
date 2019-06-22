import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

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
     return (
      <form onSubmit={this._handleSubmit}>
        Subscribe -  Sending updates about every two weeks...
	<input
	    type="text"
		    onChange={this._handleChange}
		    placeholder="name"
		    name="name"
		/>
		<input
		    type="email"
		    onChange={this._handleChange}
		    placeholder="email"
		    name="email"
		/>
		<input
		    type="comment"
		    onChange={this._handleChange}
		    placeholder="comment"
		    name="comment"
		/>
		<input type="submit" />
      </form>
	
    )
  }
}
export default SignUp

