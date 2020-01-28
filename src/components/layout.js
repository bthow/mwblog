import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Header from "./header.js"

class Layout extends React.Component {
  render() {
    const { location, title, children, bgImage } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    
    return (
      <div>
        <header class="">
          <Header location={location} title={title} 
                  subTitle="dog" bgImage={bgImage}/>
        </header>
        <main        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}

        >{children}</main>
      </div>
    )
  }
}

export default Layout

