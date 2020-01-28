import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row } from 'reactstrap';
import SiteNav from "../components/nav"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Header from "../components/header"
import Signup from "../components/signup"
import Footer from "../components/footer"
import Bio from "../components/bio"
import BackgroundImage from "gatsby-background-image"

class AppProject extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const bgImage = data.file.childImageSharp.fixed
    const showCaseImages = []
    data.allFile.nodes.map(({childImageSharp}) => {
      showCaseImages.push(childImageSharp.fixed);
    })

    return (
      <div> 
        <SiteNav/>
          <Header location={this.props.location} 
                  title="Meanwhile_Project" 
                  subTitle="An App for Christian Spirituality"  
                  bgImage={bgImage}
                  >
            <SEO title="App" />
            <div class="row justify-content-center">
              <div class="col-sm-1 col-lg-3">
                <Signup/>
              </div>
            </div>
          </Header>
        <Container>
          <Row>
            <li>Sign-up for early access - Sign-up</li>
            <signup/>

            <li>Video Intro</li>
          </Row>
        </Container>
         <Container>
          <Row>
<div  class="col-md-10 col-lg-8 col-xl-7 mx-auto"> 
</div>
          </Row>

<div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>But those who trust in the Lord will find new strength.
    They will soar high on wings like eagles.
They will run and not grow weary.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Isaiah 30 <cite title="Source Title">NLT</cite>
        </small>
      </footer>
    </blockquote>
  </div>

<div class="card bg-primary text-white text-center p-3"> 
  <div class="card-body ">
    <p class="card-text">Staying healthy spiritually is an investment, and sometimes we just don't know where to start.</p>
  </div>
</div>


<p>
  Living abroad in foreign city with two kids last year, I had no access to the gym.  I was going crazy with a sudden lack of exercise so I installed a fitness app. I was amazed, the guided workouts were surprisingly good, it pushed me and I pickup new tips for doing exercise. Even the kids joined in.  So I thought why couldnt I have an app like this for Spiritual growth?
</p>

<p>
I'm calling it a spiritual fitness app.   When we make that investment it's more rewarding than physical fitness and more significant because it's an investment in time with God. In Redfern I've been running spiritual exercises for ten years on paper with individuals and groups that have served people well.   I realised these exercises built into an app can do the same but more! 
</p>
<Bio/>

        </Container>
<section class="testimonials text-center bg-light">
    <div class="container">
      <h2 class="mb-5">What people are saying...</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt=""/>
            <h5>Bosesso </h5>
            <p class="font-weight-light mb-0">"I need this app"</p>
          </div>
        </div>
       <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt=""/>
            <h5>Sam T.</h5>
            <p class="font-weight-light mb-0">"I want to share this with my life group"</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt=""/>
            <h5>Sarah S.</h5>
            <p class="font-weight-light mb-0">"Can't wait to try this"</p>
          </div>
        </div> 
      </div>
    </div>
  </section>

       <Footer/>
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
