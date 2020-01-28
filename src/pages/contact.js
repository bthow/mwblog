import React from "react"
import { graphql } from "gatsby"
import Contact from "../components/contact"

import Nav from "../components/nav"
import Layout from "../components/layout"
import Footer from "../components/footer"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const bgImage = data.file.childImageSharp.fixed

    return (
      <div> 
        <Nav/>
        <Layout location={this.props.location} 
                title={siteTitle} 
                bgImage={bgImage}>
            
          <h1>Contact</h1>
          <Contact/>
        </Layout>
        <Footer/>
      </div>
    )
  }
}
export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    file(absolutePath: { regex: "/home-bg.jpg/" }) {
      childImageSharp {
          fixed(width: 1240) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
`
