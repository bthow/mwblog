import React from "react"
import { rhythm } from "../utils/typography"
import Header from "./header.js"

class Layout extends React.Component {
  render() {
    const { location, title, children, bgImage } = this.props
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

