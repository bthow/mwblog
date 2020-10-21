import React from "react"
import { Link } from "gatsby"

class CardPost extends React.Component {
  render() {

    const { url, title, desc } = this.props
    return (
      <div class="row">
        <div class="col-md-7">
          <button className="ButtonLink">
            <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""/>
          </button>
        </div>
        <div class="col-md-5">
          <h3>{title}</h3>
          <p>{desc}</p>
          <Link 
            class="btn btn-primary"
            className="btn btn-primary"
            to={url}>
           View 
          </Link>
        </div>
      </div>  

    )
  }
}

export default CardPost

