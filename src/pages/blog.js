import React from "react"
import { graphql } from "gatsby"
import { Container, Row } from 'reactstrap';
import Nav from "../components/nav"
import Footer from "../components/footer"
import CardPost from "../components/card-post"
import SEO from "../components/seo"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.blogPost.edges

    return (
      <div> 
        <Nav/>
          <SEO title="Meanwhile|Blog" />
        <Container py="5">    
<Row> 
              <h1 class="my-4">
                <small>RECENT POSTS</small>
              </h1>
            </Row> 
           {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const desc = node.frontmatter.description || node.excerpt
              const youtubeId = node.frontmatter.youtubeId || null 

              return (  
                <CardPost
                  title={title}
                  desc={desc}
                  youtubeId={youtubeId}
                  url={node.fields.slug}
                  date={node.frontmatter.date}/> 
              )    
            })}
                      
        </Container>
        <Footer/>
      </div>
    )
  }
}
export default BlogPage

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
