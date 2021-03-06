import React from "react"
import { rhythm, scale } from "../utils/typography"
import BackgroundImage from "gatsby-background-image"

class Header extends React.Component {
  render() {
    const { location, title, subTitle, bgImage, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let content
    let titleClass = ""

    if (location.pathname === rootPath) {
      titleClass = "mwLogoFont"
    }
    content = (
        <div class="container">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1 style={{
                ...scale(1.5),
                marginBottom: rhythm(1.5),
                marginTop: 0,
                }}
                  class={titleClass}
                  >{title}</h1>
                <h3>
                <span class="subheading">{subTitle}</span>
                </h3>
            </div>
          </div> 
        </div> 
    )
    return (
      <BackgroundImage Tag="section"
                           className="masthead text-white text-center"
                           fluid={bgImage}
                           backgroundColor={`#040e18`}
          >
          <div class="overlay"></div>
          {content} 
          {children}
        </BackgroundImage>
      
    )
  }
}

export default Header

