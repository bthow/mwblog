import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

class ShowCase extends React.Component {
  render() {
    const { title, subtext, bgImage, altpos } = this.props
    let content

    if (!altpos) {
      content = (
         <div class="row no-gutters">
              <BackgroundImage 
                className="col-lg-6 order-lg-2 text-white showcase-img"
                Tag="div"
                fluid={bgImage}
                backgroundColor={`#040e18`}/>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>{title}</h2>
                <p class="lead mb-0">{subtext}</p>
              </div>
            </div>

      )
    } 

    else {
      content = (
            <div class="row no-gutters">
              <BackgroundImage 
                className="col-lg-6 text-white showcase-img"
                Tag="div"
                fluid={bgImage}
                backgroundColor={`#040e18`}/>
              <div class="col-lg-6 my-auto showcase-text">
                <h2>{title}</h2>
                <p class="lead mb-0">{subtext}</p>
              </div>
            </div>
      )
    }
    return content
  }
}

export default ShowCase
