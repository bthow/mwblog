import React from "react"
import { graphql } from "gatsby"
import SiteNav from "../components/nav"
import SEO from "../components/seo"
import Header from "../components/header"
import Signup from "../components/signup"

class AppProject extends React.Component {
  render() {
    const { data } = this.props
    const bgImage = data.file.childImageSharp.fixed
    const showCaseImages = []
    data.allFile.nodes.map(({childImageSharp}) => {
      showCaseImages.push(childImageSharp.fixed);
      return null;
    })

    return (
      <div> 
        <SiteNav/>
          <Header location={this.props.location} 
                  title="COMING SOON" 
                  subTitle="We're working on designs for an App for iOS and Android"  
                  bgImage={bgImage}
                  >
            <SEO title="App" />
            <div class="row justify-content-center">
              <div class="col-10 col-lg-3">
                <i class="fab fa-apple h1"></i>
                <i class="fab fa-android h1"></i>
              </div> 
            </div>
            <div class="row justify-content-center">
              <div class="col-10 col-lg-3">
                <Signup/>
              </div>
            </div>
          </Header>
      </div>
    )
  }
}
export default AppProject
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
    file(absolutePath: { regex: "/app-bg.jpg/" }) {
      childImageSharp {
          fixed(width: 1240) {
            ...GatsbyImageSharpFixed
          }
      }
    }
    allFile(filter: {absolutePath: {regex: "/showcase/"}}) {
    totalCount
    nodes{
      childImageSharp {
          fixed(width: 620) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
  }
`
