import React from "react"
import { graphql } from "gatsby"
import { Container, Row } from 'reactstrap';
import Nav from "../components/nav"
import Footer from "../components/footer"
import CardPost from "../components/card-post"
import SEO from "../components/seo"

class ResourcePage extends React.Component {
  render() {
    const { data } = this.props
    const resources = data.resources.edges

    return (
      <div> 
        <Nav/>
        <SEO title="Meanwhile|Resources" />
        <Container py="5">    
          <Row> 
              <h1 class="my-4">
                <small>RESOURCES</small>
              </h1>
            </Row> 
           {resources.map(({ node }) => {
                const thumbnail = node.frontmatter.thumbnail
                const cardImage = ( thumbnail ? thumbnail.childImageSharp.fixed : null )
                return (
                 <CardPost
                    title={node.frontmatter.title}
                    desc={node.frontmatter.description}
                    image={cardImage}
                    url={node.fields.slug}/> 
                 )
                })}

                      
        </Container>
        <Footer/>
      </div>
    )
  }
}
export default ResourcePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
resources: allMarkdownRemark(
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
