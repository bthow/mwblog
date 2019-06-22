import React from "react"

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
     return (
	<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
	Your thoughts - Emails aren't published
	  <input type="hidden" name="form-name" value="contact" />
	  <input type="text" name="name" placeholder="Name"  onChange={this.handleChange}/>
	  <input type="email" name="email" placeholder="email"  onChange={this.handleChange} />
	  <textarea name="message" placeholder="Message" onChange={this.handleChange} ></textarea>
<p>
            <button type="submit">Send</button>
</p>
	</form>
    )
  }
}
export default Contact

