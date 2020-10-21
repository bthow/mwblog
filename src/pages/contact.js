import React from "react"
import { graphql } from "gatsby"
import Contact from "../components/contact"
import { Container, Row, Col} from 'reactstrap';
import Nav from "../components/nav"
import Footer from "../components/footer"

class ContactPage extends React.Component {
  render() {

    return (
      <div> 
        <Nav/>
        <Container py="5">    
          
          <Row>
            <Col xs="6" sm="10">
              <h1>Contact</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="6" sm="10">
              <Contact/>
            </Col>
          </Row>
        </Container>
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
  }
`
