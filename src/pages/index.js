import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Header from "../components/header"
import SEO from "../components/seo"
import SiteNav from "../components/nav"
import SignUp from "../components/signup"
import Footer from "../components/footer"
import CardResource from "../components/card-resource"
import CardPost from "../components/card-post"
import { rhythm } from "../utils/typography"
import { Container, Row, 
          Card, CardImg, CardTitle, CardSubtitle, CardText, CardBody, Button,
          Navbar } from 'reactstrap';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.blogPost.edges
    const resources = data.resource.edges
    const bgImage = data.file.childImageSharp.fixed

    return (
      <div>
        <SiteNav/>
         <Header location={this.props.location} title={siteTitle} 
                  subTitle="Living a bigger story" bgImage={bgImage}/>
          <SEO title="All posts" />

          <Container>
            <Row>

            <div class="jumbotron mt-2 p-4 p-md-5 text-white rounded bg-dark">
              <div> 
                <h1 class="display-4 font-italic">Spiritual Fitness Guide</h1>
                <p class="lead my-3">Three short guided sessions to take a step back and figure out how you can improve your walk with God.
We're dedicated to following Jesus together.  Figure out your shape and calling. And get smart about where you spend your energy and find encouragement. Times have changed with new media and devices. Today more than ever have we can devote time to the walk of faith. </p>
                <p class="lead mb-0 contend-right">
                  <Link 
                    class="btn btn-primary"
                    className="btn btn-primary"
                    to="#">
                    Sign-up
                  </Link></p>
              </div>
            </div>            
            </Row>
            <Row> 
              <h1 class="my-4">
                <small>GROUP RESOURCES</small>
              </h1>
            </Row> 
             <Row>
            
                {resources.map(({ node }) => {
                const thumbnail = node.frontmatter.thumbnail
                const cardImage = ( thumbnail ? thumbnail.childImageSharp.fixed : null )
                return (
                 <CardResource
                    title={node.frontmatter.title}
                    desc={node.frontmatter.description}
                    image={cardImage}
                    url={node.fields.slug}/> 
                 )
                })}

            </Row> 
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

        <Navbar color="primary" light center-text justify-content-center expand="md">
<Container></Container>
          <div class="row justify-content-center">
            <div class="col-sm-12 col-lg-3">
              <SignUp
                class="mr-auto ml-auto"
                blurbText="Register your interest, give prayer support, get early access to the app, watch interviews with practitioners - updates every few weeks..."
                />
            </div>
          </div>
        </Navbar>
        <Footer/>
      </div>
    )
  }
}

export default BlogIndex

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
