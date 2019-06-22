import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

class Contact extends React.Component {

  render() {
     return (
      <form name="contact" method="POST" data-netlify="true">
	Your thoughts
	<input
	    type="text"
		    placeholder="name"
		    name="name"
		/>
		<input
		    type="email"
		    placeholder="email"
		    name="email"
		/>
		<input
		    type="comment"
		    placeholder="comment"
		    name="comment"
		/>
		<input type="submit" />
      </form>
	
    )
  }
}
export default Contact

