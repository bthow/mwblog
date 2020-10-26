import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import SEO from "../components/seo"
import SiteNav from "../components/nav"
import SignUp from "../components/signup"
import Footer from "../components/footer"
import { Container, Col, Row, Navbar } from 'reactstrap';

class HomeIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const bgImage = data.file.childImageSharp.fixed

    return (
      <div>
        <SiteNav/>
         <Header location={this.props.location} title={siteTitle} 
                  subTitle="Practical Spirituality" bgImage={bgImage}/>
          <SEO title="Meanwhile" />

        <Navbar color="light" py="5"  light center-text justify-content-center expand="md">
          <Container class="features-icons">
            <Row className="py-5 justify-content-center" >
              <Col col-sm-12 col-lg-6 >
Spend more time on the things you value.  Get perspective and start new habits.  Spiritual strength happens when we make a small investments every week. 
              </Col>
              <div class="col-sm-12 col-lg-6">
                <SignUp
                  blurbText=""
                  />
              </div>
            </Row>
 
          </Container>
        </Navbar>
        <Footer/>
      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  blogPost: allMarkdownRemark(
    filter: {
      fileAbsolutePath: {regex: "/content/blog/"}} 
      sort: {fields: [frontmatter___date], order: DESC}) {
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
          youtubeId
        }
      }
    }
  }
  resource: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/resources/"}}) {
    edges {
      node {
        id
        fileAbsolutePath
        html
         fields {
          slug
        }
        frontmatter {
          title
          description
          thumbnail {
            childImageSharp {
              fixed(width: 250, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
    file(absolutePath: { regex: "/bg-church-table3.jpg/" }) {
      childImageSharp {
          fixed(width: 1240) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
`
