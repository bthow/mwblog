import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

class CardResource extends React.Component {
  render() {

    const { url, title, desc, image } = this.props
    return (
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <Img fixed={image} width="100%" height="225" class="bd-placeholder-img card-img-top"/> 
  {/*<svg class xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{title}</text></svg>*/}
          <div class="card-body">
            <p class="card-title">{title}</p>
            <p class="card-text">{desc}</p>
            <div class="d-flex justify-content-between align-items-center">
                  <Link 
                    class="btn btn-sm btn-outline-secondary"
                    className="btn btn-sm btn-outline-secondary"
                    to={url}>
                    Download
                  </Link>
              <small class="text-muted">25 mins</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardResource

